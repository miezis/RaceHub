import app from '../../app';

class RacesActions {
	getRaces() {
		const races = [
			{ id: 1, eventName: 'ISRA World Cup 2016', raceClass: 'PR-24'},
			{ id: 2, eventName: 'ISRA World Cup 2016', raceClass: 'ES-24'},
			{ id: 3, eventName: 'ISRA World Cup 2016', raceClass: 'ES-32'}
		];

		return races;
	}
}

export default app.createActions(RacesActions);