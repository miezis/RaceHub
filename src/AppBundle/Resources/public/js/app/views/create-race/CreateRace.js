import { Component } from 'react';
import CreateRaceActions from './CreateRaceActions';

class CreateRace extends Component {
	constructor(...args) {
		super(...args);

		this.state = {
			eventName: '',
			raceClass: '',
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		const state = this.state;
		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Create Race</h2>
				</div>
				<div className="col-md-12">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Event Name</label>
							<input type="text"
								className="form-control"
								placeholder="Event Name"
								value={state.eventName}
								onChange={this.onChange.bind(this, 'eventName')} />
						</div>
						<div className="form-group">
							<label>Race Class</label>
							<input type="text"
								className="form-control"
								placeholder="Race Class"
								value={state.raceClass}
								onChange={this.onChange.bind(this, 'raceClass')} />
						</div>
						<button type="submit" className="btn btn-default">Create</button>
					</form>
				</div>
			</div>
		);
	}

	onChange(field, e) {
		const state = this.state;
		state[field] = e.target.value;
		this.setState(state);
	}

	onSubmit(e) {
		e.preventDefault();

		CreateRaceActions.create(this.state);
	}
}

export default CreateRace;