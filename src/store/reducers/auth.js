import { handleActions } from 'redux-actions';
import * as authActions from '../actions/auth';

const initState = {
  isAuthenticated: false,
  error: null,
};

export const auth = handleActions(
    {
        [authActions.authorization]: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        [authActions.authorizationSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                isAuthenticated: action.payload
            }
        },
        [authActions.authorizationError]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        [authActions.getAuthorization]: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        [authActions.getAuthorizationSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                isAuthenticated: action.payload
            }
        },
        [authActions.getAuthorizationError]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
    },
    initState
);