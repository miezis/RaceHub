import app from '../../app';
import AppActions from './AppActions';

class AppStore {
	constructor() {
		this.bindListeners({
			getUser: AppActions.GET_USER_SUCCESS
		});

		this.state = {
			user: null
		}
	}

	getUser(user) {
		this.setState({
			user: user
		});
	}
}

export default app.createStore(AppStore, 'AppStore');