import StoreModule from "../module";

class User extends StoreModule {
  initState() {
    return {
      token: localStorage.getItem('token'),
      username: '',
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
      const { result } = await response.json();
      this.setState({
        ...this.getState(),
        token: result.token,
        username: result.user.profile.name,
        loggedIn: true,
      }, 'token added');
      localStorage.setItem('token', result.token);
    } catch (e) {
      this.setState({
        ...this.getState(),
        error: e.message,
      });
    }
  }

  async reLogIn() {
    const token = localStorage.getItem('token');
    console.log('token', token)
    if (token) {
      this.setState({
        ...this.getState(),
        loggedIn: true,
      })
      try {
        const response = await fetch('/api/v1/users/self?fields=*', {
          headers: {
            "Content-Type": "application/json",
            "X-Token": token, 
          },
        }); 
        const { result } = await response.json();
        this.setState({
          ...this.getState(),
          username: result.profile.name,
        });
      } catch (e) {
        this.setState({
          ...this.getState(),
          error: e.message,
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
}

export default User;
