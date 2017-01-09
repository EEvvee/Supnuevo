/**
 * Created by dingyiming on 2017/1/9.
 */
'use strict';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index.js';

const middlewares = [thunk];
const createLogger = require('redux-logger');

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

let store = createStoreWithMiddleware(reducer);
module.exports= store;

