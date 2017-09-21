import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default class DirectoryItem extends React.PureComponent {
    render() {
        return (
            <ListItem
                avatar={<Avatar small rounded icon={{name: 'archive', color: 'grey' }} overlayContainerStyle={{backgroundColor: this.props.item.colorCode }} />}
                title={this.props.item.displayName}
                containerStyle={{ borderBottomWidth: 0, }}
                onPress={() => this.props.navigate('Chapter', { dirName: this.props.item.name })}
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