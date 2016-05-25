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

		this.state = {
			refreshTime: 2000
		};

		this.onRefreshTimeChange = this.onRefreshTimeChange.bind(this);
		this.retrieveData();
	}

	componentWillUnmount() {
		RaceActions.resetStoreState();
	}

	render() {
		const race = this.props.race;

		if (!race) {
			return null;
		}

		const raceInProgress = race.started && !race.finished;

		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Event: {race.event_name}</h2>
				</div>
				<div className="col-md-12">
					<p>Class: {race.race_class}</p>
				</div>
				<div className="col-md-12">
					{raceInProgress && <span>Update every:</span> } 
					{raceInProgress && <select className="form-control"
						value={this.state.refreshTime} 
						onChange={this.onRefreshTimeChange}
						style={{display: 'inline-block', width: 'auto'}}>
							<option value={2000}>2 seconds</option>
							<option value={5000}>5 seconds</option>
							<option value={10000}>10 seconds</option>
							<option value={15000}>15 seconds</option>
					</select>}
					{!race.started && <span>This race has not started yet.</span>}
					{race.finished && <span>This race has finished.</span>}
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
				<td>{racer.lap_count}</td>
				<td>{racer.best_time / 1000}</td>
			</tr>
		);
	}

	retrieveData() {
		const race = this.props.race;

		if (race && (!race.started || race.finished)) {
			return;
		}

		RaceActions.getRace(this.props.params.id);

		setTimeout(() => {
			this.retrieveData();
		}, this.state.refreshTime);
	}

	onRefreshTimeChange(e) {
		e.preventDefault();

		const state = this.state;
		state.refreshTime = e.target.value;

		this.setState(state);
	}
}

export default connectToStores(Race);
