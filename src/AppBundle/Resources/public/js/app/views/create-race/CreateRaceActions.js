import app from '../../app';
import http from '../../utils/http';

import { browserHistory } from 'react-router';
import { NotificationManager } from 'react-notifications';

class CreateRaceActions {
	create(payload) {
		return http.post('/races', payload)
			.then((response) => {
				if (response.statusCode === 200) {
					browserHistory.push('/my-races');
					NotificationManager.success('Race successfully created!', 'Race', 5000);
				} else {
					NotificationManager.error('Error encountered while creating race!', 'Race', 5000);
				}
			})
	}
}

export default app.createActions(CreateRaceActions);