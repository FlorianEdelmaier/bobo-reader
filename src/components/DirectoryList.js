import React from 'react';
import { 
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator
   } from 'react-native';
import { List } from 'react-native-elements';
import DirectoryItem from './DirectoryItem';

const renderSeparator = () => { return ( <View style={styles.separator} /> ); }
const renderBusy = (isFetching) => { return (<ActivityIndicator
            style={{marginTop: 150}}
            animating={isFetching}
            size='large' />) }

const DirectoryList = ({dirData, navigate, isFetching}) => {
    if(dirData) { return (
        <List style={styles.container}>
        {isFetching ? renderBusy(isFetching) : <View />}
        <FlatList
            style={{marginBottom: 50}}
            data={dirData}
            keyExtractor={(item, index) => item.displayName}
            ItemSeparatorComponent={renderSeparator}
            renderItem={({item}) => <DirectoryItem navigate={navigate} item={item} />}
        />
        </List>
    )} else { return <View /> }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: 0,
        borderTopWidth: 0,
        backgroundColor: 'white'
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
    }
});

export default DirectoryList;