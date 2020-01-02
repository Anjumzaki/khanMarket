import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

class ProCards extends React.Component {
  render() {
    return (
      <View style={styles.procards}>
        <ImageBackground  style={styles.proCardsImage} source={this.props.product.image}>
          <Text> heart</Text>
        </ImageBackground>
        <View style={styles.underCard}>
          <Text>{this.props.product.name}</Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-around"}}>
            <Text>${this.props.product.price}/kg</Text>
            <Text>${this.props.product.price - ((this.props.product.price * this.props.product.discount)/100)}/kg</Text>
          </View>
          <View>
            <Text style={{textAlign: 'center', color: 'red'}}>You will save {this.props.product.discount}%</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default ProCards
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  procards: {
    width: 217,
    height: 253,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    
    elevation: 3
  },
  proCardsImage: {
    width: 217,
    height: 155,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow:'hidden'
  },
  underCard:{
    backgroundColor:'white',
    height:95,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    
  }
});
