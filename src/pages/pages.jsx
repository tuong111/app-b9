import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import SignIn from './signin';
import Signup from './signup';
import Home from './home';
import Albums from './albums';
import Price from './price';
export default function Pages(props) {


    return (

        <Router>
            <Switch>
                <Route exact path='/'>
                    {
                        localStorage.getItem('rememberMe') ? <Redirect to="/home" /> : <SignIn />
                    }
                </Route>
                <Route path='/sign-in' component={SignIn} />
                <Route path='/sign-up' component={Signup} />
                <Route path='/home' component={Home} />
                <Route path='/albums' component={Albums}/>
                <Route path= '/price' component ={Price}/>
            </Switch>
        </Router>
    )
}
