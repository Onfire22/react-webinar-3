import StoreModule from "../module";

class User extends StoreModule {
  initState() {
    return {
      token: localStorage.getItem('token'),
      username: '',
      status: 'idle',
      loggedIn: false,
      error: null,
    }
  }

  async logIn(data) {
    const token = localStorage.getItem('token');
    if (token) return;
    try {
      const response = await fetch('/api/v1/users/sign', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error.data.issues[0].message);
      }
      this.setState({
        ...this.getState(),
        token: result.result.token,
        username: result.result.user.profile.name,
        status: 'success',
        loggedIn: true,
      }, 'token added');
      localStorage.setItem('token', result.result.token);
    } catch (e) {
      this.setState({
        ...this.initState(),
        status: 'failed',
        error: e.message,
      });
    }
  }

  async reLogIn() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        ...this.getState(),
        loggedIn: true,
        status: 'idle',
      })
      try {
        const response = await fetch('/api/v1/users/self?fields=*', {
          headers: {
            "Content-Type": "application/json",
            "X-Token": token, 
          },
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error.data.issues[0].message);
        }
        this.setState({
          ...this.getState(),
          status: 'success',
          username: result.result.profile.name,
        });
      } catch (e) {
        this.setState({
          ...this.getState(),
          status: 'failed',
          error: result.error.data.issues[0].message,
        });
      }
    }
  }

  async logOut() {
    try {
      await fetch('/api/v1/users/sign', {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "X-Token": this.getState().token,
        },
      });
      const initState = this.initState();
      this.setState({
        initState,
      });
      localStorage.clear();
    } catch (e) {
      this.setState({
        ...this.getState(),
        error: e.message,
      });
    }
  }

  resetError() {
    this.setState({
      ...this.getState(),
      error: null,
    });
  }
}

export default User;
