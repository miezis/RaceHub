import react from 'react';

class Races extends react.Component {
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

export default Races;