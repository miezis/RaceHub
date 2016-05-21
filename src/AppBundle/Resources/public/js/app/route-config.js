import React from 'react';
import {Route, IndexRoute} from 'react-router';

import RaceHubRoot from './views/app/RaceHubRoot';
import Races from './views/races/Races';

const routes = (
    <Route path="/" component={RaceHubRoot}>
        <IndexRoute component={Races} />
    </Route>
);

export {routes};