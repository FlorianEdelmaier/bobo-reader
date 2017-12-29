import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import { Icon, Button } from 'react-native-elements';
import config from './../../config';
import Pdf from 'react-native-pdf';
import encodeUrl from 'encodeurl';
import localize from './../localization';

class Document extends React.Component {
    static navigationOptions = {
        title: 'Inhalt',
    };

    constructor(props) {
        super(props);
        this.pdf = null;
    }

    render() {
        const { dirName, fileName } = this.props.navigation.state.params;
        const filePath = encodeUrl(`${config.baseApiPath}/download/file/${this.props.lang}/${dirName}/${fileName}`);
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
                <View style={{height: 55}}>
                <Button
                    small
                    icon={{name: 'edit', type: 'font-awesome'}}
                    title={localize(this.props.lang, 'document.labelNotes')}
                    containerViewStyle={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
                    backgroundColor={'coral'}
                    borderRadius={12}
                    onPress={() => this.props.navigation.navigate('Notes', {docName: filePath})} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state[4]
    }
};

const DocumentContainer = connect(mapStateToProps)(Document);

export default DocumentContainer;

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