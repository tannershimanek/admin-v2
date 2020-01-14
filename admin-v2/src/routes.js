import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Components/Pages/Home/Home.js';
import Administration from './Components/Pages/Administration/Administration.js';

export default () => {
    
    return (
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/Admin' component={Administration}/>
        </Switch>
    );
};