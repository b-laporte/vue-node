const SERVER = `http://localhost:3000`;

class LoginService {

  public async login(username: string, password: string) {
    const response = await fetch(`${SERVER}/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ username, password }),
      credentials: 'include'
    });
    return await response.json();
  }

  public logout() {
    return fetch('http://localhost:3000/logout', { credentials: 'include' });
  }
}

export const loginService = new LoginService();
