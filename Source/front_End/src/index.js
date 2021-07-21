import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main'
import App from './admin/App'
import {
    BrowserRouter as Router,
    Route,Switch
  } from "react-router-dom";
// import BodyLogin from './Bodylogin';
class App1 extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/admin"  component={App} />
                    <Route path="/"  component={Main} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App1 />, document.getElementById('root'));

// ReactDOM.render(<Main/>,document.getElementById('root'));
