import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory as history} from 'react-router';
import {routes} from './route-config';

// For chrome dev tool support
window.React = React;

const router = <Router history={history} routes={routes} />;

ReactDOM.render(router, document.getElementById('root'));