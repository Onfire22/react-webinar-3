import StoreModule from "../module";

class Profile extends StoreModule {
  initState() {
    return {
      user: {},
      error: null,
    };
  }
  
  async getUser() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch('/api/v1/users/self?fields=*', {
          headers: {
            "Content-Type": "application/json",
            "X-Token": token,
          },
        });
        const result = await response.json();
        const userInfo = {
          email: result.result.email,
          name: result.result.profile.name,
          phone: result.result.profile.phone
        };
        this.setState({
          ...this.getState(),
          user: { ...userInfo },
        });
      } catch (e) {
        this.setState({
          ...this.getState(),
          user: null,
          error: e.message,
        });
      }
    }
  }
}

export default Profile;
