import react from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

class DashboardRoot extends react.Component {

	render() {
		return (
			<div className="countainer-fluid">
				<Helmet title="RaceHub" />
				<Header />
				<div className="container">
					<div className="row">
						{this.props.children}
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default DashboardRoot;