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
import { files } from './../actions';
import ChapterItem from './ChapterItem';

class Chapter extends React.Component {
    static navigationOptions = {
        title: 'Dokumente',
    };

    renderSeparator = () => { return ( <View style={styles.separator} /> ); }

    render() {
        console.log("props", this.props.navigation.state.params);
        console.log("files", files(this.props.navigation.state.params.dirName))
        return (
            <View style={styles.container}>
                <List containerStyle={styles.listContainer}>
                    <FlatList
                        data={files(this.props.navigation.state.params.dirName)}
                        keyExtractor={(item, index) => item.displayName}
                        ItemSeparatorComponent={this.renderSeparator}
                        renderItem={({item}) => <ChapterItem navigate={this.props.navigation.navigate} item={item} />}
                    />
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: 0,
        borderTopWidth: 0
    },
    listContainer: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        flex: 1,
        width: '100%'
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
    }
});

const mapStateToProps = (state) => {
    return {
        files: state.directory
    }
};

const ChapterContainer = connect(mapStateToProps)(Chapter);

export default ChapterContainer;