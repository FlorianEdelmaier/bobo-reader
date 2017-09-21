import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default class ChapterItem extends React.PureComponent {
    render() {
        return (
            <ListItem
                avatar={<Avatar small rounded icon={{name: 'book', color: 'grey' }} overlayContainerStyle={{backgroundColor: this.props.item.colorCode }} />}
                title={this.props.item.name}
                containerStyle={{ borderBottomWidth: 0, }}
                onPress={() => this.props.navigate('Document', { dirName: this.props.item.parentDir, fileName: this.props.item.name })}
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