import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Initial from './pages/Initial';
import Settings from './pages/Settings';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial} />
                <Settings path="/settings" component={Settings} />
            </Switch>
        </BrowserRouter>
    );
};