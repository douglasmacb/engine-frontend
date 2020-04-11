import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from '../reducers';

export default function configureStore() {
    const middleware = composeWithDevTools(applyMiddleware(promise, logger, thunk))
    return createStore(reducers, middleware)
}