import { createActions } from 'redux-actions';

export const {
    authorization,
    authorizationSuccess,
    authorizationError,
    getAuthorization,
    getAuthorizationSuccess,
    getAuthorizationError,
} = createActions(
    'AUTHORIZATION',
    'AUTHORIZATION`_SUCCESS',
    'AUTHORIZATION_ERROR',
    'GET_AUTHORIZATION',
    'GET_AUTHORIZATION`_SUCCESS',
    'GET_AUTHORIZATION_ERROR',
);