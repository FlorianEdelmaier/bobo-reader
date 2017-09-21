import React from 'react';
import Directory from './src/components/Directory';
import Chapter from './src/components/Chapter';
import Document from './src/components/Document';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

const AppNavigator = StackNavigator({
  Directory: { screen: Directory },
  Chapter: { path: 'directory/:dirName', screen: Chapter },
  Document: { path: 'document/:docName', screen: Document }
});

const App = () =>
<Provider store={store}><AppNavigator /></Provider>;

export default App;
