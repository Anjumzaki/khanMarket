import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PastOrders extends React.Component {
  render(){
    return (
        <View style={styles.container}>
            <Text>
                I am PastOrders
            </Text>
        </View>
    );
  }
}
export default PastOrders
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
