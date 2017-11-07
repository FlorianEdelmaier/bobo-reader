import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerJumbo: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerJumboMini: {
        flex: 0
    },
    containerMain: {
        backgroundColor: 'transparent',
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    containerMainSmall: {
        backgroundColor: 'transparent',
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    containerForm: {
        flex: 1,
        paddingTop: 5,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 5
    },
    containerError: {
        flex: 1,
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 6
    },
    errorText: {
        color: 'white'
    },
    inputLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 3
    },
    inputLabelError: {
        color: 'red'
    },
    inputText: {
        color: 'white',
        height: 40,
        backgroundColor: '#3399CC',
        marginBottom: 5,
        textAlignVertical: 'center',
    },
    input: {
        backgroundColor: '#3399CC',
        borderColor: 'white',
        borderRadius: 6,
        borderWidth: 0,
        height: 40,
        padding: 5,
        marginBottom: 5,
        color: 'white'
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 2
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        backgroundColor: '#006699',
        borderRadius: 6,
        borderWidth: 0,
        borderColor: 'darkgrey',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    containerBottom: {
        flex: 0,
    },
    containerBottomSmall: {
        flex: 5
    }
});

export default styles;