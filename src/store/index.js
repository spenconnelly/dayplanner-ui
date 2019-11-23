import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer, rootSaga } from '../ducks';

// create our own browser `history` object
export const history = createBrowserHistory();

let composeEnhancers = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    // Use below for more detailed (but also resources intensive) debugging
    // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 });
}
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
    )
);
const store = createStore(
    rootReducer(history),
    enhancer
);

sagaMiddleware.run(rootSaga);

// For debugging purposes
if (process.env.NODE_ENV === 'development') {
    window.__store = store;
}

export default store;
