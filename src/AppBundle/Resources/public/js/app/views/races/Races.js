import _ from 'lodash';
import react from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

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

	render() {
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
          		<p><a className="btn btn-default" href="#" role="button">View stream results »</a></p>
			</div>
		);
	}
}

export default connectToStores(Races);