import react from 'react';

class Header extends react.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">RaceHub</a>
					</div>
					<div className="navbar-right">
						<form className="navbar-form">
							<div className="form-group">
								<input type="text" placeholder="Email" className="form-control" />
							</div>
							<div className="form-group">
								<input type="password" placeholder="Password" className="form-control" />
							</div>
							<button type="submit" className="btn btn-success">Sign in</button>
            				<button type="submit" className="btn btn-default">Register</button>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;