import { Component } from 'react';

import UserDashboard from './UserDashboard';
import AppActions from './AppActions';
import Login from './Login';

class Header extends Component {
	constructor(...args) {
		super(...args);

		this.onLogin = this.onLogin.bind(this);
	}

	render() {
		const user = this.props.user;

		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">RaceHub</a>
					</div>
					<div className="navbar-right">
						{!user && <Login onLogin={this.onLogin} />}
						{user && <UserDashboard user={user} />}
					</div>
				</div>
			</nav>
		);
	}

	onLogin(username, password) {
		AppActions.login({
			username,
			password
		});
	}
}

export default Header;