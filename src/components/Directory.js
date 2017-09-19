import React from 'react';
import { 
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text } from 'react-native';
import DirectoryItem from './DirectoryItem';

export default class Directory extends React.Component {
    static navigationOptions = {
        title: 'Verzeichnis',
    };

    _keyExtractor = (item, index) => item.key;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{key: 1, name: 'name1'}, {key: 2, name: 'name2'}]}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <DirectoryItem navigate={this.props.navigation.navigate} item={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    }
});