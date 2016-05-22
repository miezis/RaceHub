import app from '../../app';
import http from '../../utils/http';

class RacesActions {
	getRaces() {
		return http.get('/races')
			.then((response) => {
				if (response.statusCode === 200) {
					this.getRacesSuccess(response.body);
				}
			});
	}

	getRacesByCurrentUser() {
		return http.get('/user/races')
			.then((response) => {
				if (response.statusCode === 200) {
					this.getRacesSuccess(response.body);
				}
			});
	}

	resetStoreState() {
		return null;
	}

	getRacesSuccess = (data) => (data)
}

export default app.createActions(RacesActions);