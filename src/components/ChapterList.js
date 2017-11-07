import React from 'react';
import { 
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator,
   } from 'react-native';
import { List } from 'react-native-elements';
import ChapterItem from './ChapterItem';

const renderSeparator = () => { return ( <View style={styles.separator} /> ); }
const renderBusy = (isFetching) => { return (<ActivityIndicator
    style={{marginTop: 150}}
    animating={isFetching}
    size='large' />) }

const ChapterList = ({subdirData, navigate, isFetching}) => {
    if(subdirData) { return (
        <List style={styles.container}>
        {isFetching ? renderBusy(isFetching) : <View />}
        <FlatList
            data={subdirData}
            keyExtractor={(item, index) => item.displayName}
            ItemSeparatorComponent={renderSeparator}
            renderItem={({item}) => <ChapterItem navigate={navigate} item={item} />}
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

export default ChapterList;