import app from '../../app';
import http from '../../utils/http';
import { browserHistory } from 'react-router'

class CreateRaceActions {
	create(payload) {
		return http.post('/races', payload)
			.then((response) => {
				if (response.statusCode === 200) {
					browserHistory.push('/')
				}
				console.log(response);
			})
	}
}

export default app.createActions(CreateRaceActions);