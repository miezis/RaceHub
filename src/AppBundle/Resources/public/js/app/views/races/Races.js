import _ from 'lodash';
import react from 'react';
import { Link } from 'react-router';
import connectToStores from 'alt-utils/lib/connectToStores';

import Loader from '../../utils/Loader';
import RacesActions from './RacesActions';
import RacesStore from './RacesStore';

class Races extends react.Component {
	static getStores() {
		return [RacesStore]
	}

	static getPropsFromStores() {
		return RacesStore.getState();
	}

	constructor(...args) {
		super(...args);

		RacesActions.getRaces();
	}

	componentWillUnmount() {
		RacesActions.resetStoreState();
	}

	render() {
		if (!this.props.initialized) {
			return <Loader />;
		}

		return (
			<div className="row">
				{
					_.map(this.props.races, (race) => this.renderRaceBucket(race))
				}
			</div>
		);
	}

	renderRaceBucket(race) {
		return (
			<div className="col-md-4" key={race.id}>
          		<h2>{race.event_name}</h2>
          		<p>{race.race_class}</p>
          		<p><Link to={`/race/${race.id}`} className="btn btn-default" role="button">View stream results »</Link></p>
			</div>
		);
	}
}

export default connectToStores(Races);