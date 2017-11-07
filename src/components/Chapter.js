import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { List } from 'react-native-elements';
import { fetchSubDirectory } from './../actions';
import ChapterList from './ChapterList';

class Chapter extends React.Component {
    static navigationOptions = {
        title: 'Dokumente',
    };

    componentDidMount() {
        this.props.fetchSubDirectory(this.props.navigation.state.params.dirName);
    }

    renderSeparator = () => { return ( <View style={styles.separator} /> ); }

    render() {
        return (
            <ChapterList subdirData={this.props.chapters} isFetching={this.props.isFetching} navigate={this.props.navigation.navigate} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chapters: state[1],
        isFetching: state[2]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSubDirectory: (parentDir) => dispatch(fetchSubDirectory(parentDir))
    }
};

const ChapterContainer = connect(mapStateToProps, mapDispatchToProps)(Chapter);

export default ChapterContainer;