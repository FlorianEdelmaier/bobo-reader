import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import DirectoryList from './DirectoryList';
import { fetchDirectory } from './../actions';

class Directory extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Verzeichnis',
    };

    componentDidMount() {
        this.props.fetchDirectory('de');
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
        isFetching: state[2]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDirectory: (countryCode) => dispatch(fetchDirectory(countryCode))
    }
};

const DirectoryContainer = connect(mapStateToProps, mapDispatchToProps)(Directory);

export default DirectoryContainer;