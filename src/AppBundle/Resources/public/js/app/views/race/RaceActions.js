import app from '../../app';
import http from '../../utils/http';

class RaceActions {
	getRace(id) {
		return http.get(`/races/${id}`)
			.then((response) => {
				if (response.statusCode === 200) {
					this.getRaceSuccess(response.body);
				}
			});
	}

	resetStoreState() {
		return null;
	}

	getRaceSuccess = (data) => (data)
}

export default app.createActions(RaceActions);