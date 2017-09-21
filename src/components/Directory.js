import React from 'react';
import {connect} from 'react-redux';
import { 
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text } from 'react-native';
import { List } from 'react-native-elements';
import DirectoryItem from './DirectoryItem';
import { fetchDirectory, data, dir } from './../actions';
import { getDirSelector } from './../reducers';


class Directory extends React.Component {
    static navigationOptions = {
        title: 'Verzeichnis',
    };

    componentDidMount() {
        this.props.fetchDirectory();
    }

    renderSeparator = () => { return ( <View style={styles.separator} /> ); }

    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={styles.listContainer}>
                <FlatList
                    data={dir}
                    keyExtractor={(item, index) => item.displayName}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={({item}) => <DirectoryItem navigate={this.props.navigation.navigate} item={item} />}
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
        borderTopWidth: 0,
        backgroundColor: '#991199'
    },
    listContainer: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginTop: 0,
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
        directory: state.directory
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDirectory: () => dispatch(fetchDirectory())
    }
};

const DirectoryContainer = connect(mapStateToProps, mapDispatchToProps)(Directory);

export default DirectoryContainer;