import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { login } from './../../actions/login';
//import { login, signalKeyboard, changeOrientation } from './../../actions';
//import { hasLoginError } from './../../reducers/loginForm';
import styles from './style';
import baseStyles from './baseStyle';
import LoginForm from './Form';
import Header from './Header';
import Jumbo from './Jumbo';

class Login extends Component {

    render() {
        return (
            <View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'darkgrey'}}>BOBO Reader</Text>
                </View>
                <View style={{height: 100}}>
                </View>
                <FormLabel>UserName</FormLabel>
                <FormInput ></FormInput>
                <FormLabel>Password</FormLabel>
                <FormInput ></FormInput>
                <FormLabel>Url</FormLabel>
                <FormInput ></FormInput>
                <Button style={{marginTop: 15}}
                    buttonStyle={{backgroundColor: 'coral'}}
                    raised
                    onPress={() => this.props.login('x','y','z')}
                    title='Login' />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, pwd, url) => dispatch(login(email, pwd, url)),
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;