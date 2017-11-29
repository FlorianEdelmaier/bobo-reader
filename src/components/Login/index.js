import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, Text, Dimensions, Image, ImageBackground, Platform } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, FormValidationMessage, FormLabel, Button } from 'react-native-elements';
import { login } from './../../actions/login';
import { setLang } from './../../actions/lang';
import LanguageSelector from './LanguageSelector';
import styles from './style';
import validator from 'validator';
import localize from './../../localization';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pwd: '',
            url: '',
            unameValidation: localize(this.props.lang, 'login.errorUnameEmpty'),
            pwdValidation: localize(this.props.lang, 'login.errorPwdEmpty'),
            urlValidation: localize(this.props.lang, 'login.errorUrlEmpty')
        }
    }

    componentWillReceiveProps(newProps) {
        this.validateUserName(newProps.lang, this.state.uname);
        this.validatePwd(newProps.lang, this.state.pwd);
        this.validateUrl(newProps.lang, this.state.url);
    }

    updateValue(type, value) {
        switch(type) {
            case 'uname':
                this.validateUserName(this.props.lang, value);
                this.setState({uname: value});
                break;
            case 'pwd':
                this.validatePwd(this.props.lang, value);
                this.setState({pwd: value});
                break;
            case 'url':
                this.validateUrl(this.props.lang, value);
                this.setState({url: value});
                break;
        }
    }

    validateUserName(lang, value) {
        if(validator.isEmpty(value))
            this.setState({unameValidation: localize(lang, 'login.errorUnameEmpty')});
        else if(!validator.isLength(value, {min: 1, max: 50}))
            this.setState({unameValidation: localize(lang, 'login.errorUnameSize')});
        else
            this.setState({unameValidation: undefined});
    }

    validatePwd(lang, value) {
        if(validator.isEmpty(value))
            this.setState({pwdValidation: localize(lang, 'login.errorPwdEmpty')});
        else if(!validator.isLength(value, {min: 1, max: 30}))
            this.setState({pwdValidation: localize(lang, 'login.errorPwdSize')});
        else
            this.setState({pwdValidation: undefined});
    }

    validateUrl(lang, value) {
        if(validator.isEmpty(value))
            this.setState({urlValidation: localize(lang, 'login.errorUrlEmpty')});
        else if(!validator.isURL(value))
            this.setState({urlValidation: localize(lang, 'login.errorUrlUrl')});
        else
            this.setState({urlValidation : undefined});
    }

    canLogin() {
        return this.state.unameValidation === undefined &&
               this.state.pwdValidation === undefined &&
               this.state.urlValidation === undefined;
    }

    render() {
        return (
            <View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'darkgrey'}}>{localize(this.props.lang, 'title')}</Text>
                </View>
                <View style={{height: 100}}>
                </View>
                <FormLabel>{localize(this.props.lang, 'login.labelUname')}</FormLabel>
                <FormInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='default'
                    onChangeText={(v) => this.updateValue('uname', v)}>
                </FormInput>
                {this.state.unameValidation !== undefined && <FormValidationMessage>{this.state.unameValidation}</FormValidationMessage>}
                <FormLabel>{localize(this.props.lang, 'login.labelPwd')}</FormLabel>
                <FormInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(v) => this.updateValue('pwd', v)}>
                </FormInput>
                {this.state.pwdValidation !== undefined && <FormValidationMessage>{this.state.pwdValidation}</FormValidationMessage>}
                <FormLabel>{localize(this.props.lang, 'login.labelUrl')}</FormLabel>
                <View style={{flexDirection: 'row', marginLeft: 22}}>
                <Text>https://</Text><FormInput
                    style={{width: 90}}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(v) => this.updateValue('url', 'https://' + v + '.skischoolshop.com')}>
                </FormInput><Text>.skischoolshop.com</Text>
                </View>
                {this.state.urlValidation !== undefined && <FormValidationMessage>{this.state.urlValidation}</FormValidationMessage>}
                <LanguageSelector lang={this.props.lang} onChange={this.props.setLang} />
                <Button style={{marginTop: 15}}
                    buttonStyle={{backgroundColor: 'coral'}}
                    raised
                    disabled={!this.canLogin()}
                    loading={this.props.isFetching}
                    onPress={() => this.props.login(this.state.uname, this.state.pwd, this.state.url, Platform.OS)}
                    title='Login' />
                {this.props.loginError && 
                    <View style={{margin: 25}}>
                        <Text style={{color: 'red', fontWeight: 'bold'}}>Login Error</Text> 
                        <Text style={{color: 'red', fontWeight: 'bold'}}>{this.props.loginError}</Text>
                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state[2],
        lang: state[4],
        loginError: state[5]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (uname, pwd, url, os) => dispatch(login(uname, pwd, url, os)),
        setLang: (code) => dispatch(setLang(code))
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;