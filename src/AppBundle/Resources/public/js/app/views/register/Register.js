import { Component } from 'react';

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
	}
	render() {
		const state = this.state;

		return (
			<div className="row">
				<div className="col-md-12">
					<h2>Registration</h2>
				</div>
				<div className="col-md-12">
					<form>
						<div className="form-group">
							<label>Email</label>
							<input className="form-control"
								type="email"
								placeholder="Email"
								value={state.email}/>
						</div>
						<div className="form-group">
							<label>Username</label>
							<input className="form-control"
								type="text"
								placeholder="Username"
								value={state.username} />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input className="form-control"
								type="password"
								placeholder="Password"
								value={state.plainPassword.first} />
						</div>
						<div className="form-group">
							<label>Password (Confirm)</label>
							<input className="form-control"
								type="password"
								placeholder="Password (Confirm)"
								value={state.plainPassword.second} />
						</div>
						<button type="submit" className="btn btn-default">Register</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
