import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '../components/Slider'

class Home extends React.Component {
  render(){
    return (
        <View >
          <Slider/>
            <Text>
                I am Home
            </Text>
        </View>
    );
  }
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
