import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './views/app/App';
import Races from './views/races/Races';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Races} />
    </Route>
);

export {routes};