import _ from 'lodash';
import react from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import RaceActions from './RaceActions';
import RaceStore from './RaceStore';

class Race extends react.Component {
	static getStores() {
		return [RaceStore]
	}

	static getPropsFromStores() {
		return RaceStore.getState();
	}

	constructor(...args) {
		super(...args);

		const props = _.first(args);

		RaceActions.getRace(props.params.id);
	}

	componentWillUnmount() {
		RaceActions.resetStoreState();
	}

	render() {
		return (
			<div className="row">
			</div>
		);
	}
}

export default connectToStores(Race);