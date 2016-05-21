import app from '../../app';
import RacesActions from './RacesActions';

class RacesStore {
	constructor() {
		this.bindListeners({
			getRaces: RacesActions.GET_RACES
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
}

export default app.createStore(RacesStore, 'RacesStore');