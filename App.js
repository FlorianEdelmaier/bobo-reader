import React from 'react';
import {connect} from 'react-redux';
import Directory from './src/components/Directory';
import Chapter from './src/components/Chapter';
import Document from './src/components/Document';
import Login from './src/components/Login';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import {isLoggedIn} from './src/reducers'

const Root = () => (
  <Provider store={store}><AppContainer /></Provider>
)

const AppNavigator = StackNavigator({
  Directory: { screen: Directory },
  Chapter: { path: 'directory/:dirName', screen: Chapter },
  Document: { path: 'document/:docName', screen: Document }
});

class App extends React.Component {

    render() {
      const mainComponent = this.props.isAuthenticated ? <AppNavigator /> : <Login />;
      return (
        <Provider store={store}>{mainComponent}</Provider>
      )
    }
}


const mapStateToProps = (state) => {
  return {
      isFetching: state[2],
      isAuthenticated: isLoggedIn(state[3])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      login: (uname, pwd, url) => dispatch(login(uname, pwd, url))
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default Root;
