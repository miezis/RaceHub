import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './views/app/App';
import Races from './views/races/Races';
import Register from './views/register/Register';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Races} />
        <Route path="register" component={Register} />
    </Route>
);

export {routes};