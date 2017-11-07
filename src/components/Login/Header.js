import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import baseStyles from './baseStyle';
//import strings from './../../localization';

const getWidth = () => Dimensions.get('window').width;
const hstyle = getWidth() < 400 ? baseStyles.h1small : baseStyles.h1;

const Header = () => (
    <View style={[baseStyles.containerHeadImage]}>
    <Image style={{marginRight: 15, width: 70, resizeMode: 'contain'}}/>
    <View>
    <Text style={[hstyle]}>WS Notifier</Text>
    <Text style={[baseStyles.h3]}>{"Waldhart Software"}</Text>
    </View>
    </View>
);

export default Header;