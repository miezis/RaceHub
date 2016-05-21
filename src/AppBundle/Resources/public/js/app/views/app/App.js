import react from 'react';
import Helmet from 'react-helmet';
import connectToStores from 'alt-utils/lib/connectToStores';

import Header from './Header';
import Footer from './Footer';
import AppStore from './AppStore';
import AppActions from './AppActions';

class App extends react.Component {
	constructor(...args) {
		super(...args);

		AppActions.getUser();
	}

	static getStores() {
		return [AppStore]
	}

	static getPropsFromStores() {
		return AppStore.getState();
	}

	render() {
		const props = this.props;

		if (!props.initialized) {
			return null;
		}

		return (
			<div className="countainer-fluid">
				<Helmet title="RaceHub" />
				<Header user={props.user} />
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