import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cart extends React.Component {
  render(){
    return (
        <View style={styles.container}>
            <Text>
                I am Cart
                Cart   </Text>
        </View>
    );
  }
}
export default Cart
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
