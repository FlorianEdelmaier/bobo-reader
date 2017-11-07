import React, { Component, PropTypes } from 'react';
import { ActivityIndicator, View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './style';
// import validator from 'validator';
//import strings from './../../localization';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pwd: '',
            url: '',
            unameValidation: undefined,
            pwdValidation: undefined,
            urlValidation: undefined
        }
    }

    static propTypes = {
        onLoginPress: PropTypes.func.isRequired,
        signalKeyboard: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        loginErrorMessage: PropTypes.string,
        deviceType: PropTypes.string.isRequired,
        deviceToken: PropTypes.string.isRequired
    }

    canLogin() {
        return this.state.unameValidation === undefined &&
               this.state.pwdValidation === undefined &&
               this.state.urlValidation === undefined;
    }

    login() {
        if(!this.canLogin()) return;
        this.props.onLoginPress(this.state.uname, this.state.pwd, this.state.url, this.props.deviceType, this.props.deviceToken);
    }

    validateUserName(value) {
        // if(validator.isEmpty(value))
        //     this.setState({unameValidation: strings.errors.uNameNotDefined});
        // else if(!validator.isLength(value, {min: 1, max: 100}))
        //     this.setState({unameValidation: strings.errors.uNameLength});
        // else
        //     this.setState({unameValidation: undefined});
    }

    validatePwd(value) {
        // if(validator.isEmpty(value))
        //     this.setState({pwdValidation: strings.errors.pwdNotDefined});
        // else if(!validator.isLength(value, {min: 1, max: 30}))
        //     this.setState({pwdValidation: strings.errors.pwdLength});
        // else
        //     this.setState({pwdValidation: undefined});
    }

    validateUrl(value) {
        // if(validator.isEmpty(value))
        //     this.setState({urlValidation: strings.errors.urlNotDefined});
        // else if(!validator.isURL(value))
        //     this.setState({urlValidation: strings.errors.urlValidation});
        // else
        //     this.setState({urlValidation : undefined});
    }

    render() {
        const errorMsg = this.props.loginErrorMessage !== undefined ?
            (<View style={[styles.containerError]}>
                <Text style={[styles.errorText]}>{this.props.loginErrorMessage}</Text>
            </View>) : (<View />);
        return (
            <View style={[styles.containerForm]}>
                <ActivityIndicator animating={this.props.isFetching}
                    color='orange'
                    size='large' />
                <Text style={[styles.inputLabel, this.state.unameValidation !== undefined && styles.inputLabelError]}>{this.state.unameValidation !== undefined ? this.state.unameValidation : 'UserName'}</Text>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    returnKeyType='next'
                    placeholder='…'
                    placeholderTextColor='white'
                    style={[styles.input]}
                    onChangeText={(text) => this.setState({ uname: text.trim() })}
                    onFocus={() => this.props.signalKeyboard(true)}
                    onEndEditing={(ev) => { this.props.signalKeyboard(false); this.validateUserName(ev.nativeEvent.text.trim()); this.refs.pwdInput.focus(); }}
                    underlineColorAndroid={this.state.unameValidation !== undefined ? 'red' : 'grey'}
                />
                <Text style={[styles.inputLabel, this.state.pwdValidation && styles.inputLabelError]}>{this.state.pwdValidation !== undefined ? this.state.pwdValidation : 'Passwort'}</Text>
                <TextInput
                    ref="pwdInput"
                    autoCapitalize='none'
                    autoCorrect={false}
                    returnKeyType='next'
                    placeholder='…'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    style={[styles.input, this.state.pwdValidation !== undefined && styles.inputError]}
                    onChangeText={(text) => this.setState({ pwd: text.trim() })}
                    onFocus={() => this.props.signalKeyboard(true)}
                    onEndEditing={(ev) => { this.props.signalKeyboard(false); this.validatePwd(ev.nativeEvent.text.trim()); this.refs.urlInput.focus(); }}
                    underlineColorAndroid={this.state.pwdValidation !== undefined ? 'red' : 'grey'}
                />
                <Text style={[styles.inputLabel, this.state.urlValidation && styles.inputLabelError]}>{this.state.urlValidation !== undefined ? this.state.urlValidation : 'Url'}</Text>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={[styles.inputText]}>https://</Text>
                    <TextInput
                        ref="urlInput"
                        autoCapitalize='none'
                        autoCorrect={false}
                        returnKeyType='next'
                        placeholder='…'
                        placeholderTextColor='white'
                        style={[{flex: 1}, styles.input, this.state.urlValidation !== undefined && styles.inputError]}
                        onChangeText={(text) => this.setState({ url: 'https://'+text.trim()+'.skischoolshop.com' })}
                        onFocus={() => this.props.signalKeyboard(true)}
                        onEndEditing={(ev) => { this.props.signalKeyboard(false); this.validateUrl('https://'+ev.nativeEvent.text.trim()+'.skischoolshop.com'); }}
                        underlineColorAndrod={this.state.urlValidation !== undefined ? 'red' : 'grey'}
                        />
                    <Text style={[styles.inputText]}>.skischoolshop.com</Text>
                </View>
                {errorMsg}
                <TouchableHighlight
                    underlayColor='orange'
                    disabled={this.props.isFetching}
                    onPress={() => this.login()}
                    style={[styles.button, { height: 50 }, styles.wireframe]} >
                    <Text pointerEvents="none" style={styles.buttonText}>
                        Anmelden
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

export default Form;