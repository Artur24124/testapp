import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from './containers/MainPage';
import NewsPage from './containers/NewsPage';
import LoginPage from './containers/LoginPage';
import ProfilePage from './containers/ProfilePage';

import * as authActions from './store/actions/auth';

import './App.scss';

const {
    getAuthorization
} = authActions;

class App extends Component {
    componentDidMount() {
        this.props.getAuthorization();
    }

    render() {
        return (
            <div className='layout'>
                <header className='header'>
                    <div className='header__menu'>
                        <Link className='header__menu-item' to='/'>
                            Main
                        </Link>

                        <Link className='header__menu-item' to='/news'>
                            News
                        </Link>

                        <Link className='header__menu-item' to='/profile'>
                            Profile
                        </Link>
                    </div>
                </header>

                <main className='content'>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            render={(props) => <MainPage {...props} />}
                        />
                        <Route
                            exact
                            path={'/news'}
                            render={(props) => <NewsPage {...props} />}
                        />
                        <Route
                            exact
                            path={'/profile'}
                            render={(props) => this.props.isAuthenticated
                                ? <ProfilePage {...props} />
                                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
                        />

                        <Route
                            exact
                            path={'/login'}
                            render={(props) => this.props.isAuthenticated
                                ? <Redirect to={{pathname: '/profile', state: {from: props.location} }} />
                                    : <LoginPage {...props} />
                                }
                        />
                    </Switch>
                </main>
                <footer className='footer'>
                    <div className='header__menu'>
                        <Link className='header__menu-item' to='/'>
                            Main
                        </Link>

                        <Link className='header__menu-item' to='/news'>
                            News
                        </Link>

                        <Link className='header__menu-item' to='/profile'>
                            Profile
                        </Link>
                    </div>
                </footer>
            </div>
        );
    }
}

export default connect(
    state => ({
        isAuthenticated: state.auth.isAuthenticated
    }),
    {
        getAuthorization
    }
)(App)
