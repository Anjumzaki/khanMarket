// import React from 'react';
// import {
// StyleSheet,
// View,
// Text,
// Dimensions,
// Image
// } from 'react-native';
// import ViewSlider from 'react-native-view-slider'

// const { width, height } = Dimensions.get('window');

// function Slider() {
//   return (
//     <>
//       <ViewSlider 
//         renderSlides = {
//           <>
//             <View style={styles.viewBox}>
//               <Image source={{uri: 'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg'}} style={{height: 200, width}}/>
//             </View>
//             <View style={styles.viewBox}><Text>TWO</Text></View>
//             <View style={styles.viewBox}><Text>THREE</Text></View>
//             <View style={styles.viewBox}><Text>FOUR</Text></View>
//          </>
//       }
//       style={styles.slider}     //Main slider container style
//       height = {200}    //Height of your slider
//       slideCount = {4}    //How many views you are adding to slide
//       dots = {true}     // Pagination dots visibility true for visibile 
//       dotActiveColor = 'white'     //Pagination dot active color
//       dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
//       autoSlide = {true}    //The views will slide automatically
//       slideInterval = {6000}    //In Miliseconds
//      />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   viewBox: {
//       paddingHorizontal: 20,
//       justifyContent: 'center',
//       width: width,
//       padding: 10,
//       alignItems: 'center',
//       height: 150
//   },
//   slider: {
//       alignSelf: 'center',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'pink'
//   },
//   dotContainer: {
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     bottom: 15
//   }
// });

// export default Slider;
import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    ImageBackground,
    Image,
    StyleSheet,
    LinearGradient,
    TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import LatoText from '../LatoText'

const { width } = Dimensions.get('window');
const { height } = 300;


export default class CarouselExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            size: { width, height },
        };
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    render() {
        return (
            <View onLayout={this._onLayoutDidChange}>
                <Carousel
                    delay={6000}
                    style={{ width: Dimensions.get('window').width, height: 250 }}
                    autoplay={false}
                    bullets
                    onAnimateNextPage={(p) => console.log(p)}
                    bulletStyle={{ padding: 0, margin: 3, marginBottom: 110 }}
                    chosenBulletStyle={{ padding: 0, margin: 3, marginBottom: 110 }}
                >
                    <View>
                        <ImageBackground style={styles.imgCon} source={require('../assets/cabbage.png')} >
                            <View style={styles.wrapTop}>

                                <View style={styles.topRight}>
                                    <LatoText fontName="Lato-Bold" fonSiz={16} col='white' text="2 Packs For $2.20" />
                                    <View style={{ marginTop: 5 }}>
                                        <LatoText fontName="Lato-Light" fonSiz={13} col='white' text="Save $1.30" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomText}>
                                <ImageBackground style={{ width: Dimensions.get('window').width, height: 170 }} source={require('../assets/bgSlider.png')} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '73%' }}>
                                            <LatoText fontName="Lato-Regular" fonSiz={17} col='white' text="Fresh broccoli from the gardens of colombia" />
                                        </View>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '30%', justifyContent: 'flex-end' }}>
                                            <TouchableOpacity style={styles.buybBtn}>
                                                <LatoText fontName="Lato-Regular" fonSiz={16} col='gray' text="BUY" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground style={styles.imgCon} source={require('../assets/cabbage.png')} >
                            <View style={styles.wrapTop}>

                                <View style={styles.topRight}>
                                    <LatoText fontName="Lato-Bold" fonSiz={16} col='white' text="2 Packs For $2.20" />
                                    <View style={{ marginTop: 5 }}>
                                        <LatoText fontName="Lato-Light" fonSiz={13} col='white' text="Save $1.30" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomText}>
                                <ImageBackground style={{ width: Dimensions.get('window').width, height: 170 }} source={require('../assets/bgSlider.png')} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '73%' }}>
                                            <LatoText fontName="Lato-Regular" fonSiz={17} col='white' text="Fresh broccoli from the gardens of colombia" />
                                        </View>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '30%', justifyContent: 'center' }}>
                                            <TouchableOpacity style={styles.buybBtn}>
                                                <LatoText fontName="Lato-Regular" fonSiz={16} col='gray' text="BUY" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground style={styles.imgCon} source={require('../assets/cabbage.png')} >
                            <View style={styles.wrapTop}>

                                <View style={styles.topRight}>
                                    <LatoText fontName="Lato-Bold" fonSiz={16} col='white' text="2 Packs For $2.20" />
                                    <View style={{ marginTop: 5 }}>
                                        <LatoText fontName="Lato-Light" fonSiz={13} col='white' text="Save $1.30" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomText}>
                                <ImageBackground style={{ width: Dimensions.get('window').width, height: 170 }} source={require('../assets/bgSlider.png')} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '73%' }}>
                                            <LatoText fontName="Lato-Regular" fonSiz={17} col='white' text="Fresh broccoli from the gardens of colombia" />
                                        </View>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '30%', justifyContent: 'center' }}>
                                            <TouchableOpacity style={styles.buybBtn}>
                                                <LatoText fontName="Lato-Regular" fonSiz={16} col='gray' text="BUY" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground style={styles.imgCon} source={require('../assets/cabbage.png')} >
                            <View style={styles.wrapTop}>

                                <View style={styles.topRight}>
                                    <LatoText fontName="Lato-Bold" fonSiz={16} col='white' text="2 Packs For $2.20" />
                                    <View style={{ marginTop: 5 }}>
                                        <LatoText fontName="Lato-Light" fonSiz={13} col='white' text="Save $1.30" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomText}>
                                <ImageBackground style={{ width: Dimensions.get('window').width, height: 170 }} source={require('../assets/bgSlider.png')} >
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '73%' }}>
                                            <LatoText fontName="Lato-Regular" fonSiz={17} col='white' text="Fresh broccoli from the gardens of colombia" />
                                        </View>
                                        <View style={{ paddingTop: 105, paddingHorizontal: 10, width: '30%', justifyContent: 'center' }}>
                                            <TouchableOpacity style={styles.buybBtn}>
                                                <LatoText fontName="Lato-Regular" fonSiz={16} col='gray' text="BUY" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ImageBackground>
                    </View>
                </Carousel>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCon: {
        width: Dimensions.get('window').width,
        height: 250
    },
    topRight: {
        alignSelf: 'flex-end',

    },
    wrapTop: {
        alignSelf: 'flex-end',

        marginTop: 30,
        backgroundColor: '#7cba80',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    bottomText: {
        height: 200,
        flexDirection: "row",
    },
    buybBtn: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});