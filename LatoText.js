import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';


class LatoText extends React.Component {
    state = {
        fontLoaded: false,
      };
      async componentDidMount() {
        await Font.loadAsync({
          'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
          'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
          'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),


        });
    
        this.setState({ fontLoaded: true });
      }
    
  render(){
    return (
      
        
           
              <Text style={{fontFamily:  this.state.fontLoaded ? ( this.props.fontName ) : null,color:this.props.col,fontSize:this.props.fonSiz}}>
                {this.props.text}
              </Text>
          
          
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
