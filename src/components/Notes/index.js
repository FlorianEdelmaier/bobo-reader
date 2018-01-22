import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, Text, Dimensions, Image, ImageBackground, Platform } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, FormValidationMessage, FormLabel, Button, Card } from 'react-native-elements';
import NotesList from './NotesList';
import { fetchNotes, createNote } from './../../actions/notes';

class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = { filePath: '', text: '' }
    }

    static navigationOptions = {
        title: 'Notizen',
    }

    componentDidMount() {
        const { docName } = this.props.navigation.state.params;
        const schema = docName.split('/');
        const path = unescape(schema[schema.length - 2] + '#' + schema[schema.length - 1]);
        console.log('did mount', schema, path)
        this.setState({filePath: path})
        this.props.fetchNotes(this.props.uid, path, this.props.token);
    }

    onPressSave() {
        this.props.createNote(this.props.uid, this.state.filePath, this.state.text, this.props.token);
        this.setState({text: ''})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Card title={"Notiz"}>
                    <FormInput
                        multiline
                        autoCapitalize='none'
                        autoCorrect={true}
                        keyboardType='default'
                        maxLength={120}
                        numberOfLines={4}
                        onChangeText={(text) => this.setState({text: text})}
                        value={this.state.text}
                    />
                    <Button
                        containerViewStyle={{margin: 10}}
                        raised
                        onPress={() => this.onPressSave()}
                        title={"Save"} />
                </Card>
                <NotesList notes={this.props.notes} isFetching={this.props.isFetching} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state[3].id,
        isFetching: state[2],
        token: state[3].token,
        notes: state[6]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: (uid, fpath, token) => dispatch(fetchNotes(uid, fpath, token)),
        createNote: (uid, fpath, note, token) => dispatch(createNote(uid, fpath, note, token))
    }
};

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;