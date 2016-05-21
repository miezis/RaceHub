import { Component } from 'react';

import AppActions from './AppActions';

class UserDashBoard extends Component {
	constructor(...args) {
		super(...args);

		this.onLogout = this.onLogout.bind(this);
	}

	render() {
		return (
			<div>
				<p className="navbar-text">Your API Key: 37b51d194a7513e45b56f6524f2d51f2</p>
	            <button className="btn btn-success navbar-btn">Create Race</button>
	            <button className="btn btn-success navbar-btn">My Races</button>
	            <button className="btn btn-warning navbar-btn" onClick={this.onLogout}>Logout</button>
			</div>
		);
	}

	onLogout() {
		AppActions.logout();
	}
}

export default UserDashBoard;