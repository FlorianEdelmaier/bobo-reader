import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import DirectoryList from './DirectoryList';
import { fetchDirectory } from './../actions';
import localize from './../localization';

class Directory extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: localize('de', 'browser.labelDir'),
    };

    componentDidMount() {
        // console.log("did mount", this.props.lang, this.props.token)
        this.props.fetchDirectory(this.props.lang, this.props.token);
    }

    render() {
        return (
            <DirectoryList
                dirData={this.props.directory}
                isFetching={this.props.isFetching}
                navigate={this.props.navigation.navigate} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        directory: state[0],
        isFetching: state[2],
        token: state[3].token,
        lang: state[4]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDirectory: (countryCode) => dispatch(fetchDirectory(countryCode))
    }
};

const DirectoryContainer = connect(mapStateToProps, mapDispatchToProps)(Directory);

export default DirectoryContainer;