import http from './http';

class AuthService {
	static client_id = '2_17pd5yb9qk5c8gw0wg8ckg4os8cc08wgww4k8scg4cg0o0gg0o';
	static client_secret = '1yfpea0m3ug0kogoc88g80w4kww0gowgc0ocgwswc8kcscck8g';
	static grant_type = 'password';

	static accessKey = 'access_token';
	static refreshKey = 'refresh_token';

	static setTokens(access, refresh) {
		localStorage.setItem(this.accessKey, access);
		localStorage.setItem(this.refreshKey, refresh);
	}

	static getAccessToken() {
		return localStorage.getItem(this.accessKey);
	}

	static getRefreshToken() {
		return localStorage.getItem(this.refreshKey);
	}

	static removeTokens() {
		localStorage.removeItem(this.accessKey);
		localStorage.removeItem(this.refreshKey);
	}

	static login(username, password) {
		const payload = {
			client_id: this.client_id,
			client_secret: this.client_secret,
			grant_type: this.grant_type,
			username,
			password
		};

		return http.auth('/oauth/v2/token', payload)
			.then((response) => {
				if (response.statusCode === 200) {
					const { access_token, refresh_token } = response.body;
					this.setTokens(access_token, refresh_token);

					return true;
				}

				return false;
			});
	}
}

export default AuthService;