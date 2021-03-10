import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect, Router} from 'react-router-dom';
// import { connect } from 'react-redux';

// import AdminLayout from "./layouts/Admin.jsx";
import AuthLayout from "./layouts/Auth.jsx";

// import * as actions from './Store/actions/index';
import Admin from "./layouts/Admin";
import {auth} from "./services/firebase";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            isAuthenticated: false,
        }
    }
    path = '/';
    componentDidMount() {
        // this.props.onTryAutoSignup();
        this.path = this.props.location.pathname;
        // this.props.onGetPermissionsData();

        this.checkIfLoggedIn()
    }
     checkIfLoggedIn = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                // console.log(user);
                this.setState({
                    isAuthenticated: true
                })
            } else {
                this.setState({
                    isAuthenticated: false
                })
                // No user is signed in.
                // console.log("logged out");
                // props.history.push("/login")
            }
        });
    }

    getPath = (path) => {
        switch (path) {
            case '/auth/login':
                return '/admin/dashboard/home';
            case '/':
                return '/admin/dashboard/home';
            case '/admin':
                return path + '/dashboard/home';
            case '/admin/':
                return path + 'dashboard/home';
            case '/admin/dashboard':
                return path + '/home';
            case '/admin/dashboard/':
                return path + 'home';
            default:
                return path;
        }
    }
    render() {
        let routes = (
            <Switch>
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
                <Redirect from="*" to="/auth/login" />
            </Switch>
        );

        if (this.state.isAuthenticated) {
            routes = (
                    <Switch>
                        <Route path="/admin" component={Admin} />
                        <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
            );
        }

        return (
            <div>
                {routes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onTryAutoSignup: () => dispatch(actions.authCheckState()),
        // onGetPermissionsData: () => dispatch(actions.getPermissionsData()),
    };
};

export default withRouter((App));
