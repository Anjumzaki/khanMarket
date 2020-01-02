import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Slider from '../components/Slider'
import CardsRow from '../components/CardsRow'
import beef1 from '../assets/products/beef1.png'
import beef2 from '../assets/products/beef2.png'
import beef3 from '../assets/products/beef3.png'
import beef4 from '../assets/products/beef4.png'
import beef5 from '../assets/products/beef5.png'
import chicken1 from '../assets/products/chicken1.png'
import chicken2 from '../assets/products/chicken2.png'
import chicken3 from '../assets/products/chicken3.png'
import chicken4 from '../assets/products/chicken4.png'
import chicken5 from '../assets/products/chicken5.png'
import veg1 from '../assets/products/veg1.png'
import veg2 from '../assets/products/veg2.png'
import veg3 from '../assets/products/veg3.png'
import veg4 from '../assets/products/veg4.png'
import veg5 from '../assets/products/veg5.png'

class Home extends React.Component {

  constructor(props) 
  { 
      super(props); 
      this.state = { beefs : [
          {
              name: 'Rib Eye',
              price: 5,
              image: beef1,
              discount: 10
          },
          {
            name: 'Rib Eye',
            price: 5,
            image: beef2,
            discount: 10
        },
        {
          name: 'Rib Eye',
          price: 5,
          image: beef3,
          discount: 10
        },
          {
            name: 'Rib Eye',
            price: 5,
            image: beef4,
            discount: 10
        },
        {
          name: 'Rib Eye',
          price: 5,
          image: beef5,
          discount: 10
      }], 
      chickens : [
        {
            name: 'Boneless',
            price: 5,
            image: chicken1,
            discount: 10
        },
        {
          name: 'Breast',
          price: 5,
          image: chicken2,
          discount: 10
      },
      {
        name: 'Breast',
        price: 5,
        image: chicken3,
        discount: 10
      },
        {
          name: 'Whole Chicken',
          price: 5,
          image: chicken4,
          discount: 10
      },
      {
        name: 'Breast',
        price: 5,
        image: chicken5,
        discount: 10
    }],
    vegs : [
      {
          name: 'Broccoli',
          price: 5,
          image: veg1,
          discount: 10
      },
      {
        name: 'Carrots',
        price: 5,
        image: veg2,
        discount: 10
    },
    {
      name: 'Cauli Flower',
      price: 5,
      image: veg3,
      discount: 10
    },
      {
        name: 'Peas',
        price: 5,
        image: veg4,
        discount: 10
    },
    {
      name: 'Red Turnips',
      price: 5,
      image: veg5,
      discount: 10
  }],
    }; 
  } 


  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} >
        <Slider />
       <CardsRow products={this.state.beefs} name={'Beef'}/>
       <CardsRow products={this.state.chickens} name={'Chicken'}/>
       <CardsRow products={this.state.vegs} name={'Vegetables'}/>
     <View style={{paddingTop:10}}>

     </View>
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
