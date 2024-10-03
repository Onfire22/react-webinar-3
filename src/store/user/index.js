import StoreModule from "../module";

class User extends StoreModule {
  initState() {
    return {
      token: localStorage.getItem('token'),
      userData: {},
      loggedIn: false,
      error: null,
    }
  }

  async logIn(data) {
    try {
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
    } catch (e) {
      this.setState({
        ...this.getState(),
        error: e.message,
      });
    }
  }

  async reLogIn() {
    try {
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
    } catch (e) {
      console.log(e)
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
