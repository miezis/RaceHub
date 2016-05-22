import app from '../../app';
import RacesActions from './RacesActions';

class RacesStore {
	constructor() {
		this.bindListeners({
			getRaces: RacesActions.GET_RACES_SUCCESS,
			resetStore: RacesActions.RESET_STORE_STATE
		});

		this.state = {
			races: [],
			initialized: false
		}
	}

	getRaces(races) {
		this.setState({
			races: races,
			initialized: true
		});
	}

	resetStore() {
		this.setState({
			races: [],
			initialized: false
		});
	}
}

export default app.createStore(RacesStore, 'RacesStore');