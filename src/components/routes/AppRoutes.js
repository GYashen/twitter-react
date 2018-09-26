import React from "react";
import { Router, Switch ,Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import LoginPage from '../Login/App';


export const history = createHistory();




const Routes = () => (
    <Router history={history}>

        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            {/* <PublicRoute path="/signup" component={SignupPage} /> */}

            {/* <PrivateRoute path="/termsheet/:id" component={DraftPage} />
            <PrivateRoute path="/contract/:id" component={ContractPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/template" component={TemplatePage} />
            <PrivateRoute path="/project/:id/:name" component={ProjectPage} />
            <Route path="/manage-users" component={UserManagement} />
            <PrivateRoute path="/clauses/:id/:name" component={Clauses} />
            <PrivateRoute path="/home" component={Homepage} />
            <PrivateRoute path="/clause-analytic/:id/:name" component={Analytic} />
            <Route path="/test" component={CreateTemplate} /> */}
        </Switch>
    </Router>
);

export default Routes;