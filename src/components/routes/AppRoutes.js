import React from "react";
import { Router, Switch ,Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import HomePage from '../Home/App';
import {Provider} from 'react-redux';
import store from '../../store';

export const history = createHistory();




const Routes = () => (
    <Provider store={store}>
        <Router history={history}>

            <Switch>
                <PublicRoute path="/" component={HomePage} exact={true} />
            </Switch>
        </Router>
    </Provider>
);

export default Routes;