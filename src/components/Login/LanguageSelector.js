import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const LanguageSelector = (props) => (
    <View style={styles.container}>
        <Button
            buttonStyle={styles.button}
            borderRadius={10}
            backgroundColor={props.lang === 'de' ? 'green' : 'gray'}
            onPress={() => props.onChange('de')}
            title='de' />
        <Button
            buttonStyle={styles.button}
            borderRadius={10}
            backgroundColor={props.lang === 'en' ? 'green' : 'gray'}
            onPress={() => props.onChange('en')}
            title='en' />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5
    },
    button: {
        width: 70,
        marginTop: 5,
        marginLeft: 0,
        marginRight: 0
    }
})

export default LanguageSelector;
