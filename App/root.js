/**
 * Created by dingyiming on 2017/1/9.
 */
'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';

import App from './containers/App.js';


export default class Root extends Component {
    render() {
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
