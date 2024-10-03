import StoreModule from "../module";

class User extends StoreModule {
  initState() {
    return {
      token: localStorage.getItem('token'),
      userData: {},
      loggedIn: false,
    }
  }

  async logIn(data) {
    const response = await fetch('/api/v1/users/sign', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const { result } = await response.json();
    const user = {
      email: result.user.email,
      name: result.user.profile.name,
      phone: result.user.profile.phone
    }
    this.setState({
      ...this.getState(),
      token: result.token,
      userData: user,
      loggedIn: true,
    }, 'token added');
    localStorage.setItem('token', result.token);
  }

  async reLogIn() {
    if (this.getState().loggedIn) {
      const response = await fetch('/api/v1/users/self?fields=*', {
        headers: {
          "Content-Type": "application/json",
          "X-Token": this.getState().token,
        },
      });
      const { result } = await response.json();
      const user = {
        email: result.email,
        name: result.profile.name,
        phone: result.profile.phone
      };
      this.setState({
        ...this.getState(),
        userData: user,
        loggedIn: true,
      });
    }
  }

  async logOut() {
    await fetch('/api/v1/users/self?fields=*', {
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
  }
}

export default User;
