/**
 * Created by dingyiming on 2017/1/9.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import { connect } from 'react-redux';

import Login from './Login.js';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={

        }
    }


    render() {
        let auth=this.props.auth;
        if(auth==true)
        {

            return (
                <View>
                    <Text>主页</Text>
                </View>
            );
        }else{
            return (<Login/>);
        }
    }
}


export default connect(
    (state) => ({
        auth: state.user.auth
    })
)(App);
