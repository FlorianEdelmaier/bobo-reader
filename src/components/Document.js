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
        const filePath = encodeUrl(`${config.baseApiPath}/download/file/de/${dirName}/${fileName}`);
        let source = {uri: filePath, cached: true};
        // source = require("./node-dev.pdf");
        return (
            <View style={styles.container}>
                <Pdf
                    ref={pdf => this.pdf = pdf}
                    source={source}
                    style={styles.pdf}
                    fitWidth={true}
                    spacing={0}
                    activityIndicator={<ActivityIndicator size={'large'} />}
                    onLoadComplete={(pageCount)=>{
                        console.log("pdf", this.pdf);
                        console.log(`total page count: ${pageCount}`);
                    }}
                    onPageChanged={(page, pageCount) => {
                        console.log(`current page: ${page}`, page.Dimensions);
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
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        margin: 0,
    },
    pdf: {
        flex: 1,
        justifyContent: 'flex-start',
        // marginTop: (Dimensions.get('window').height * -1),
        width: '100%' // Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        //backgroundColor: 'blue'
    }
});

//