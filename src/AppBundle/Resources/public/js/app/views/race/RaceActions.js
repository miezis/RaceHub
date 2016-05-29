import app from '../../app';
import http from '../../utils/http';
import { NotificationManager } from 'react-notifications';

class RaceActions {
	getRace(id) {
		return http.get(`/races/${id}`)
			.then((response) => {
				if (response.statusCode === 200) {
					this.getRaceSuccess(response.body);
				} else {
					NotificationManager.error('Failed to retrieve race, please try again later.', 'Race', 5000);
				}
			});
	}

	resetStoreState() {
		return null;
	}

	getRaceSuccess = (data) => (data)
}

export default app.createActions(RaceActions);