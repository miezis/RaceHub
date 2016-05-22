import { Component } from 'react';
import { Link } from 'react-router';

import AppActions from './AppActions';

class UserDashBoard extends Component {
	constructor(...args) {
		super(...args);

		this.onLogout = this.onLogout.bind(this);
	}

	render() {
		return (
			<div>
				<p className="navbar-text">Your API Key: {this.props.user.apiKey}</p>
	            <button className="btn btn-success navbar-btn">Create Race</button>
	            <Link to="/my-races" className="btn btn-success navbar-btn">My Races</Link>
	            <button className="btn btn-warning navbar-btn" onClick={this.onLogout}>Logout</button>
			</div>
		);
	}

	onLogout() {
		AppActions.logout();
	}
}

export default UserDashBoard;