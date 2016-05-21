import { Component } from 'react';

class Login extends Component {
	constructor(...args) {
		super(...args);

		this.state = {
			username: '',
			password: '',
		}

		this.onLogin = this.onLogin.bind(this);
	}

	render() {
		const state = this.state;

		return (
			<form className="navbar-form">
				<div className="form-group">
					<input type="text"
						placeholder="Email or username"
						className="form-control"
						value={state.username}
						onChange={this.onChange.bind(this, 'username')} />
				</div>
				<div className="form-group">
					<input type="password"
						placeholder="Password"
						className="form-control"
						value={state.password}
						onChange={this.onChange.bind(this, 'password')} />
				</div>
				<button type="submit" className="btn btn-success" onClick={this.onLogin}>Sign in</button>
				<button type="submit" className="btn btn-default">Register</button>
			</form>
		);
	}

	onChange(field, e) {
		const state = this.state;

		state[field] = e.target.value;

		this.setState(state);
	}

	onLogin(e) {
		e.preventDefault();

		const { username, password } = this.state;
		this.props.onLogin(username, password);
	}
}

export default Login;