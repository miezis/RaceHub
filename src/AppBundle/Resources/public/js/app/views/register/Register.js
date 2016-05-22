import { Component } from 'react';
import _ from 'lodash';

import RegisterActions from './RegisterActions';

class Register extends Component {
	constructor(...args) {
		super(...args);

		this.state = {
			email: '',
			username: '',
			plainPassword: {
				first: '',
				second: ''
			}
		};

		this.registerUser = this.registerUser.bind(this);
	}

	render() {
		const state = this.state;

		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Registration</h2>
				</div>
				<div className="col-md-12">
					<form onSubmit={this.registerUser}>
						<div className="form-group">
							<label>Email</label>
							<input className="form-control"
								type="email"
								placeholder="Email"
								value={state.email}
								onChange={this.onChange.bind(this, 'email')} />
						</div>
						<div className="form-group">
							<label>Username</label>
							<input className="form-control"
								type="text"
								placeholder="Username"
								value={state.username}
								onChange={this.onChange.bind(this, 'username')} />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input className="form-control"
								type="password"
								placeholder="Password"
								value={state.plainPassword.first}
								onChange={this.onPasswordChange.bind(this, 'first')} />
						</div>
						<div className="form-group">
							<label>Password (Confirm)</label>
							<input className="form-control"
								type="password"
								placeholder="Password (Confirm)"
								value={state.plainPassword.second}
								onChange={this.onPasswordChange.bind(this, 'second')} />
						</div>
						<button type="submit" className="btn btn-default">Register</button>
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

	onPasswordChange(field, e) {
		const state = this.state;
		state.plainPassword[field] = e.target.value;
		this.setState(state);
	}

	registerUser(e) {
		e.preventDefault();

		RegisterActions.register(this.state);
	}
}

export default Register;
