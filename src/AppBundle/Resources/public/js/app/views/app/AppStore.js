import app from '../../app';
import AppActions from './AppActions';

class AppStore {
	constructor() {
		this.bindListeners({
			getUser: AppActions.GET_USER_SUCCESS,
			initialize: AppActions.GET_USER_FAIL,
			logout: AppActions.LOGOUT
		});

		this.state = {
			user: null,
			initialized: false
		}
	}

	getUser(user) {
		this.setState({
			user: user,
			initialized: true
		});
	}

	initialize() {
		this.setState({
			initialized: true
		});
	}

	logout() {
		this.setState({
			user: null
		});
	}
}

export default app.createStore(AppStore, 'AppStore');