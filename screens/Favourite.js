import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Favourite extends React.Component {
  render(){
    return (
        <View style={styles.container}>
            <Text>
                I am Favourite
            </Text>
        </View>
    );
  }
}
export default Favourite
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
