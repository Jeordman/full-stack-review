import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Components //
import Landing from './Components/Landing';
import Register from './Components/Register';
import Account from './Components/Account';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/account' component={Account}/>
        <Route path='/register' component={Register}/>
    </Switch>
)