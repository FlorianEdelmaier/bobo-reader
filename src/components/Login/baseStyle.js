import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wireframe: {
        borderWidth: 1,
        borderColor: 'darkgrey',
        borderStyle: 'dashed'
    },
    containerImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        alignItems: 'stretch'
    },
    containerBase: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    containerHeadImage: {
        flexDirection: 'row',
        marginLeft: 10,


        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    containerHeader: {
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5
    },
    containerHeaderSmall: {
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5
    },
    h1: {
        fontSize: 42,
        fontWeight: '700',
        color: 'white',
        backgroundColor: 'transparent'
    },
    h1small: {
        fontSize: 30,
        fontWeight: '700',
        color: 'white',
        backgroundColor: 'transparent'
    },
    h3: {
        fontSize: 15,
        fontWeight: '100',
        color: 'white',
        backgroundColor: 'transparent'
    }
});