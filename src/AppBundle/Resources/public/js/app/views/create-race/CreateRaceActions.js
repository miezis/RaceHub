import app from '../../app';
import http from '../../utils/http';

class CreateRaceActions {
	create(payload) {
		return http.post('/races', payload)
			.then((response) => {
				console.log(response);
			})
	}
}

export default app.createActions(CreateRaceActions);