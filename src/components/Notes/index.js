import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, Text, Dimensions, Image, ImageBackground, Platform } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, FormValidationMessage, FormLabel, Button, Card } from 'react-native-elements';
import NotesList from './NotesList';
import { fetchNotes } from './../../actions/notes';

class Notes extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Notizen',
    }

    componentDidMount() {
        const { filePath } = this.props.navigation.state.params;
        this.props.fetchNotes(this.props.uid, filePath, this.props.token);
    }

    render() {
        return (
            <View>
                <Card title={"Notiz"}>
                    <FormInput
                        multiline
                        autoCapitalize='none'
                        autoCorrect={true}
                        keyboardType='default'
                    />
                    <Button
                        containerViewStyle={{margin: 10}}
                        raised
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
        notes: [{note: "xxx"},{notes: "yyy"}]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: (uid, fpath, token) => dispatch(fetchNotes(uid, fpath, token))
    }
};

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;