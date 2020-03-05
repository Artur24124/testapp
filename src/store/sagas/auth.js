import { call, takeEvery, put } from 'redux-saga/effects';
import * as authActions from '../actions/auth';

import {
    authUser,
    getAuth,
} from '../../api';

function* authorizationSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(authUser, payload);
        yield put(authActions.authorizationSuccess(response));
    } catch (e) {
        yield put(authActions.authorizationError(e));
    }
}
function* getAuthorizationSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(getAuth, payload);
        yield put(authActions.getAuthorizationSuccess(response));
    } catch (e) {
        yield put(authActions.getAuthorizationError(e));
    }
}

export function* articlesSagas() {
    yield takeEvery(
        authActions.authorization.toString(),
        authorizationSaga
    );

    yield takeEvery(
        authActions.getAuthorization.toString(),
        getAuthorizationSaga
    );
}