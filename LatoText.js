import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';


class LatoText extends React.Component {
    state = {
        fontLoaded: false,
      };
      async componentDidMount() {
        await Font.loadAsync({
          'Lato-bold': require('./assets/fonts/Lato-Light.ttf'),
        });
    
        this.setState({ fontLoaded: true });
      }
    
  render(){
    return (
      
        
            this.state.fontLoaded ? (
              <Text style={{fontFamily: this.props.fontName,color:'white',fontSize:15,backgroundColor:'transparent'}}>
                {this.props.text}
              </Text>
            ) : null
          
    );
  }
}
export default LatoText
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
