import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/profile';
import NotMatch from '../pages/nomatch';
import ComingSoon from '../pages/comingsoon';

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/blank" component={ComingSoon} />
                <Route component ={NotMatch}/>
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;