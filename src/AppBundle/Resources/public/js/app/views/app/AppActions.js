import app from '../../app';
import http from '../../utils/http';
import AuthService from '../../utils/AuthService';

class AppActions {
	login(payload) {
		const { username, password } = payload;
		return AuthService.login(username, password)
			.then((loggedIn) => {
				if (loggedIn) {
					return this.getUser();
				}
			});
	}

	getUser() {
		return http.get('/user')
			.then((response) => {
				if (response.statusCode === 200) {
					this.getUserSuccess(response.body);
				}

				return null;
			});
	}

	getUserSuccess = (data) => (data);
}

export default app.createActions(AppActions);