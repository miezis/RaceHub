import react from 'react';
import Helmet from 'react-helmet';
import connectToStores from 'alt-utils/lib/connectToStores';

import Header from './Header';
import Footer from './Footer';
import AppStore from './AppStore';

class App extends react.Component {
	static getStores() {
		return [AppStore]
	}

	static getPropsFromStores() {
		return AppStore.getState();
	}

	render() {
		const user = this.props.user;
		return (
			<div className="countainer-fluid">
				<Helmet title="RaceHub" />
				<Header user={user} />
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

export default connectToStores(App);