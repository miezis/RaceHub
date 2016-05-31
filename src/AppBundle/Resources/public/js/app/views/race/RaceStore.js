import _ from 'lodash';
import app from '../../app';
import RaceActions from './RaceActions';

class RaceStore {
	constructor() {
		this.bindListeners({
			getRace: RaceActions.GET_RACE_SUCCESS,
			resetStore: RaceActions.RESET_STORE_STATE
		});

		this.state = {
			race: null
		}
	}

	getRace(race) {
		race.racers = _.orderBy(race.racers, 'lap_count', 'desc');
		this.setState({
			race: race
		});
	}

	resetStore() {
		this.setState({
			race: null
		});
	}
}

export default app.createStore(RaceStore, 'RaceStore');