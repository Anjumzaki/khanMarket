import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends React.Component {
  render(){
    return (
        <View style={styles.container}>
            <Text>
                I am Cart
            </Text>
        </View>
    );
  }
}
export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
