import react from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import RacesActions from './RacesActions';
import RacesStore from './RacesStore';

class Races extends react.Component {
	static getStores() {
		return [RacesStore]
	}

	static getPropsFromStores() {
		return RacesStore.getState();
	}

	constructor(...args) {
		super(...args);

		setTimeout(() => {
			RacesActions.getRaces();
		}, 500);
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
	          		<h2>ISRA World Cup 2016</h2>
	          		<p>Production 24</p>
	          		<p><a className="btn btn-default" href="#" role="button">View stream results »</a></p>
				</div>
				<div className="col-md-4">
	          		<h2>ISRA World Cup 2016</h2>
	          		<p>Eurosport 32</p>
	          		<p><a className="btn btn-default" href="#" role="button">View stream results »</a></p>
				</div>
				<div className="col-md-4">
	          		<h2>ISRA World Cup 2016</h2>
	          		<p>Eurosport 24</p>
	          		<p><a className="btn btn-default" href="#" role="button">View stream results »</a></p>
				</div>
				<div className="col-md-4">
	          		<h2>ISRA World Cup 2016</h2>
	          		<p>Formula-1 24</p>
	          		<p><a className="btn btn-default" href="#" role="button">View stream results »</a></p>
				</div>
			</div>
		);
	}
}

export default connectToStores(Races);