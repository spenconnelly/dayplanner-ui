import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

export const rootReducer = history => combineReducers({
    router: connectRouter(history)
});

export function* rootSaga() {
    yield all([
    ]);
}
