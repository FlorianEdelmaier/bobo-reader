import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Dimensions,
    StyleSheet
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
        this.state = {
            page: 1,
            pageCount: 1,
        };
        this.pdf = null;
    }

    prePage = () => {
        if(this.pdf) {
            let prePage = this.state.page > 1 ? this.state.page - 1 : 1;
            this.pdf.setNativeProps({page: prePage});
            this.setState({page: prePage});
            console.log(`prePage: ${prePage}`);
        }
    }

    nextPage = () => {
        if(this.pdf) {
            let nextPage = this.state.page + 1 > this.state.pageCount ? this.state.pageCount : this.state.page + 1;
            this.pdf.setNativeProps({page: nextPage});
            this.setState({page: nextPage});
        }
    }

    render() {
        const { dirName, fileName } = this.props.navigation.state.params;
        const filePath = encodeUrl(`${config.baseApiPath}/download/file/de/${encodeUrl(dirName)}/${encodeUrl(fileName)}`);
        let source = {uri: filePath, cache: true};
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', zIndex: 100 }}>
                    {/* <TouchableHighlight
                        disabled={this.state.page === 1}
                        style={this.state.page === 1 ? styles.btnDisable : styles.btn}
                        onPress={() => this.prePage()} */}
                    
                    <Icon
                        name='chevron-left'
                        onPress={() => this.prePage()}
                    />
                    <Icon
                        name='chevron-right'
                        onPress={() => this.nextPage()}
                    />
                    {/* <TouchableHighlight
                        disabled={this.state.page === this.state.pageCount}
                        style={this.state.page === this.state.pageCount ? styles.btnDisable : styles.btn}
                        onPress={() => this.nextPage()}
                    >
                    <Icon name='arrow-bold-right' />
                    </TouchableHighlight> */}
                </View>
                <Pdf
                    ref={ (pdf) => { this.pdf = pdf }}
                    source={source}
                    style={styles.pdf}
                    page={1}
                    scale={2}
                    onLoadComplete={pageCount => {
                        console.log("finished loading pdf")
                        this.setState({pageCount: pageCount});
                        console.log(`total page count: ${pageCount}`);
                    }}
                    onPageChanged={(page, pageCount) => {
                        this.setState({page: page});
                        console.log(`current page: ${page}`);
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
        marginTop: 0,
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
        flex:1,
        marginTop: 20,
        alignItems: 'flex-start',
        width:Dimensions.get('window').width,
        zIndex: 10
    }
});