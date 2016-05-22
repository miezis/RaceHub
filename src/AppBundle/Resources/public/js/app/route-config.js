import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './views/app/App';
import Race from './views/race/Race';
import Races from './views/races/Races';
import MyRaces from './views/races/MyRaces';
import Register from './views/register/Register';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Races} />
        <Route path="register" component={Register} />
        <Route path="my-races" component={MyRaces} />
        <Route path="race/:id" component={Race} />
    </Route>
);

export {routes};