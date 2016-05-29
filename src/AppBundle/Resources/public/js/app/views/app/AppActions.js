import app from '../../app';
import http from '../../utils/http';
import AuthService from '../../utils/AuthService';

import { browserHistory } from 'react-router'
import { NotificationManager } from 'react-notifications';

class AppActions {
	authenticate() {
		return AuthService.authenticate()
			.then(() => {
				return this.getUser();
			});
	}

	login(payload) {
		const { username, password } = payload;
		return AuthService.login(username, password)
			.then(() => {
				return this.getUser();
			});
	}

	logout() {
		AuthService.removeTokens();
		NotificationManager.info('You\'ve been logged out.', 'Logout', 5000);
		browserHistory.push('/');
		return true;
	}

	getUser() {
		return http.get('/user')
			.then((response) => {
				if (response.statusCode === 200) {
					this.getUserSuccess(response.body);
				}

				return this.getUserFail(response.error);
			})
			.catch((err) => this.getUserFail(err));
	}

	getUserSuccess = (data) => (data);
	getUserFail = (data) => (data);
}

export default app.createActions(AppActions);