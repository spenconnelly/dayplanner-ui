import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './App';
import Calendar from './components/Calendar/Calendar';

export const AppChildrenRoutes = () =>
    <Switch>
        <Route path="/" exact component={Calendar} />
        <Redirect path="*" to="/" />
    </Switch>;

const DayPlannerRouter = () =>
    <BrowserRouter>
        <Route>
            <Route path="/" component={App} />
        </Route>
    </BrowserRouter>;

export default DayPlannerRouter;
