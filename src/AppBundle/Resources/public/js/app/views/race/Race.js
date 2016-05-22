import _ from 'lodash';
import react from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import RaceActions from './RaceActions';
import RaceStore from './RaceStore';

class Race extends react.Component {
	static getStores() {
		return [RaceStore]
	}

	static getPropsFromStores() {
		return RaceStore.getState();
	}

	constructor(...args) {
		super(...args);

		const props = _.first(args);

		RaceActions.getRace(props.params.id);
	}

	componentWillUnmount() {
		RaceActions.resetStoreState();
	}

	render() {
		const race = this.props.race;

		if (!race) {
			return null;
		}

		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Event: {race.event_name}</h2>
				</div>
				<div className="col-md-12">
					<p>Class: {race.race_class}</p>
				</div>
				<div className="col-md-12">
					<p>Update every 2 seconds</p>
				</div>
				<div className="table-responsive col-md-12">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Position</th>
								<th>Racers Name</th>
								<th>Total Laps</th>
								<th>Best Time</th>
							</tr>
						</thead>
						<tbody>
							{_.map(race.racers, (racer, index) => (this.renderRacerRow(racer, index)))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}

	renderRacerRow(racer, index) {
		return (
			<tr>
				<td>{index + 1}</td>
				<td>{racer.name}</td>
				<td>{racer.lapCount}</td>
				<td>{racer.bestTime / 1000}</td>
			</tr>
		);
	}
}

export default connectToStores(Race);
