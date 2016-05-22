import app from '../../app';
import http from '../../utils/http';

class RegisterActions {
	register(payload) {
		return http.post('/users', payload)
			.then((response) => {
				console.log(response);
			})
	}
}

export default app.createActions(RegisterActions);