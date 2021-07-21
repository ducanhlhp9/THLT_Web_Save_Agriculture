import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cookie from "js-cookie";
import {GlobalContext} from "./GlobalContext";
import { ToastContainer} from 'react-toastify';



const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;


// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {
  constructor(props) {
    super(props);

    this.setAuthenticated = (token, callback) => {
      Cookie.set("token", token, { expires: 7 });

      this.setState(state => ({
        isAuthenticated: true,
        token: token,
      }));

      callback();
    };

    this.unsetAuthenticated = () => {
      Cookie.remove("token");
    };

    // this.setCurrentUser = (user) => {
    //   if (user.type === 1) {
    //     this.setState({
    //       nav: admin_navigation,
    //       user: user
    //     })
    //   } else {
    //     this.setState({
    //       nav: manage_navigation,
    //       user: user
    //     })
    //   }
    // };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      token: Cookie.get("token"),
      isAuthenticated: !!Cookie.get("token"),
      setAuthenticated: this.setAuthenticated,
      unsetAuthenticated: this.unsetAuthenticated,
      // setCurrentUser: this.setCurrentUser,
      nav: {
        items: [],
      },
      user: null
    };
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
        </HashRouter>
        <ToastContainer />
      </GlobalContext.Provider>
    );
  }
}

export default App;
