import React from 'react';
import { 
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator
   } from 'react-native';
import { List } from 'react-native-elements';
import Note from './NoteItem';

const renderSeparator = () => { return ( <View style={styles.separator} /> ); }
const renderBusy = (isFetching) => { return (<ActivityIndicator
            style={{marginTop: 150}}
            animating={isFetching}
            size='large' />) }

const NotesList = ({notes, isFetching}) => {
    if(notes) { return (
        <List style={styles.container}>
        {isFetching ? renderBusy(isFetching) : <View />}
        <FlatList
            data={notes}
            keyExtractor={(item, index) => item.note}
            ItemSeparatorComponent={renderSeparator}
            renderItem={({item}) => <Note item={item} />}
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
        marginTop: 5,
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

export default NotesList;