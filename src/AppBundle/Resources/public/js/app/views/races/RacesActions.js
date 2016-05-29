import app from '../../app';
import http from '../../utils/http';
import { NotificationManager } from 'react-notifications';

class RacesActions {
	getRaces() {
		return http.get('/races')
			.then((response) => {
				if (response.statusCode === 200) {
					this.getRacesSuccess(response.body);
				} else {
					NotificationManager.error('Failed to retrieve races, please try again later.', 'Races', 5000);
				}
			});
	}

	getRacesByCurrentUser() {
		return http.get('/user/races')
			.then((response) => {
				if (response.statusCode === 200) {
					this.getRacesSuccess(response.body);
				} else {
					NotificationManager.error('Failed to retrieve user races, please try again later.', 'User Races', 5000);
				}
			});
	}

	resetStoreState() {
		return null;
	}

	getRacesSuccess = (data) => (data)
}

export default app.createActions(RacesActions);