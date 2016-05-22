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

		RacesActions.getRacesByCurrentUser();
	}

	componentWillUnmount() {
		RacesActions.resetStoreState();
	}

	render() {
		return (
			<div className="row">
        		<div className="col-md-12">
          			<h2>My Races</h2>
        		</div>
				{
					_.map(this.props.races, (race) => this.renderRaceBucket(race))
				}
			</div>
		);
	}

	renderRaceBucket(race) {
		return (
			<div className="col-md-4" key={race.id}>
            	<h3>{race.event_name}</h3>
            	<h4>ID: {race.id}</h4>
          		<p>{race.race_class}</p>
          		<p><a className="btn btn-default" href="#" role="button">View stream results »</a></p>
			</div>
		);
	}
}

export default connectToStores(Races);