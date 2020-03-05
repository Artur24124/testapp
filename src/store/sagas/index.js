import { fork } from 'redux-saga/effects';

import { articlesSagas } from './auth';

export default function*() {
    yield fork(articlesSagas);
}