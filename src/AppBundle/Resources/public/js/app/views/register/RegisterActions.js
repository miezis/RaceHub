import app from '../../app';
import http from '../../utils/http';

import { browserHistory } from 'react-router'
import { NotificationManager } from 'react-notifications';


class RegisterActions {
	register(payload) {
		return http.post('/users', payload)
			.then((response) => {
				if (response.statusCode === 200) {
					browserHistory.push('/');
					NotificationManager.success('Successfully registered! You can now login.', 'Registration', 5000);
				} else {
					NotificationManager.error('Error encountered while registering!', 'Registration', 5000);
				}
			})
	}
}

export default app.createActions(RegisterActions);