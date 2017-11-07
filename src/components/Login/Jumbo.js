import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './style';

const Jumbo = ({ isMinimized }) => (
    isMinimized ? <View style={[styles.containerJumboMini]} /> :
        <View style={[styles.containerJumbo]}>
            {/* <Image source={require('./../../assets/wsLogo.png')} style={[{width: 65}]}/> */}
        </View>
);

// Jumbo.propTypes = {
//     isMinimized: PropTypes.bool.isRequired
// }

export default Jumbo;