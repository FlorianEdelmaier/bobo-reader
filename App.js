import React from 'react';
import Directory from './src/components/Directory';
import Chapter from './src/components/Chapter';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Directory: { screen: Directory },
  Chapter: { screen: Chapter },
});

export default App;
