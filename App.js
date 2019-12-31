import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './AppNavigator';

class App extends React.Component {
  render(){
    return <AppContainer />;
  }
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
