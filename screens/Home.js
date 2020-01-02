import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Slider from '../components/Slider'
import CardsRow from '../components/CardsRow'

class Home extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} >
        <Slider />
       <CardsRow/>
       <CardsRow/>
       <CardsRow/>
        <Text>
          I am Home
            </Text>
      </ScrollView>
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
