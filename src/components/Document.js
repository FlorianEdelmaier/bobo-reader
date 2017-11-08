import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { Icon } from 'react-native-elements';
import config from './../../config';
import Pdf from 'react-native-pdf';
import encodeUrl from 'encodeurl';

export default class Document extends React.Component {
    static navigationOptions = {
        title: 'File',
    };

    constructor(props) {
        super(props);
        this.pdf = null;
    }

    render() {
        const { dirName, fileName } = this.props.navigation.state.params;
        const filePath = encodeUrl(`${config.baseApiPath}/download/file/de/${encodeUrl(dirName)}/${encodeUrl(fileName)}`);
        let source = {uri: filePath, cached: true};
        return (
            <View style={styles.container}>
                <Pdf
                    ref={pdf => this.pdf = pdf}
                    source={source}
                    style={styles.pdf}
                    fitWidth={true}
                    activityIndicator={<ActivityIndicator size={'large'} />}
                    onLoadComplete={(pageCount)=>{
                        console.log("pdf", this.pdf);
                        console.log(`total page count: ${pageCount}`);
                    }}
                    onError={err => {
                        console.log(`err: ${err}`);
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 0,
    },
    btn: {
        margin: 5,
        padding:5,
        backgroundColor: "blue",
    },
    btnDisable: {
        margin: 5,
        padding:5,
        backgroundColor: "gray",
    },
    btnText: {
        color: "#FFF",
    },
    pdf: {
        flex: 1,
        width:  Dimensions.get('window').width,
        //height: Dimensions.get('window').height
    }
});

//