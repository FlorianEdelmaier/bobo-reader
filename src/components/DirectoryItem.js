import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class DirectoryItem extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigate('Chapter')}>
                <Text>{this.props.item.name}</Text>
            </TouchableOpacity>
        );
    }
}