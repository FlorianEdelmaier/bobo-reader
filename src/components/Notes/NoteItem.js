import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default class NoteItem extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("Note props:", this.props.item)
        return (
            <ListItem
                avatar={<Avatar medium rounded icon={{name: 'list', color: 'white' }} />}
                title={this.props.item.note}
                titleNumberOfLines={4}
                hideChevron={true}
                avatarContainerStyle={{ marginRight: 5 }}
                containerStyle={{ borderBottomWidth: 1 }}
                titleStyle={{fontSize: 22, color: 'coral'}}
                titleContainerStyle={{ marginLeft: 20, marginTop: 15, marginBottom: 10 }}
            />
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        width: '100%',
        backgroundColor: '#669977',
    }
})