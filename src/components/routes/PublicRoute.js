import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    component: Component,
    ...rest
}) => {
    console.log(rest);
    return (
        <Route {...rest} component={(...props) => (
                <div>
                    <Component {...props} />
                </div>
        )} />
    )}

export default PublicRoute;