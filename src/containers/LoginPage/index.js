import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../store/actions/auth';

import './style.scss';

const { authorization } = authActions;


class LoginPage extends Component {
    state = {
        login: '',
        password: '',
        error: false,
    };

    onSubmit = async (e) => {
        e.preventDefault();

        const { login, password } = this.state;

        await this.props.authorization({
            login,
            password,
        });

        if (this.props.isAuthenticated) {
            this.setState({
                error: false,
            }, () => {
                this.props.history.push('/profile');
            })
        } else {
            this.setState({
                error: true,
            });
        }
    };

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div className='login'>
                <h1>Login Page</h1>
                { this.state.error ? <p className='login__error'>Имя пользователя или пароль введены не верно</p> : null }
                <form className='login__form'>
                    <input
                        name='login'
                        onChange={ this.onHandleChange }
                        value={ this.state.login }
                        className='login__form-input'
                        placeholder='User name'
                        type="text"
                    />

                    <input
                        name='password'
                        onChange={ this.onHandleChange }
                        value={ this.state.password }
                        className='login__form-input'
                        placeholder='Password'
                        type="password"
                    />

                    <button className='login__form-button' type='submit' onClick={ this.onSubmit }>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(
    state => ({
        isAuthenticated: state.auth.isAuthenticated
    }),
    {
        authorization
    }
)(LoginPage)