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

	getRacesSuccess = (data) => (data)
}

export default app.createActions(RacesActions);