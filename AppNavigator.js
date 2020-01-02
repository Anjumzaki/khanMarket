import React from 'react';
import { View, Text, Button, TouchableHighlight, Image, Platform, StyleSheet, TextInput, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Home from './screens/Home'
import Favourite from './screens/Favourite'
import PastOrders from './screens/PastOrders'
import Cart from './screens/Cart'
import Login from './screens/Login'
import LatoText from './LatoText'
import {
    Entypo, Feather, FontAwesome,
    EvilIcons,
    AntDesign,MaterialIcons,
MaterialCommunityIcons
} from '@expo/vector-icons';
import SignUp from './screens/SignUp'

const MainTabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Details',
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                <Entypo name="home" size={26} color={focused ? '#2e2e2e' : "#89898c"} />
            ),
        },
    },
    Favourite: {
        screen: Favourite,
        navigationOptions: {
            headerTitle: 'Details',
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                <Entypo name="heart" size={26} color={focused ? '#2e2e2e' : "#89898c"} />
            ),
        },
    },

    PastOrders: {
        screen: PastOrders,
        navigationOptions: {
            headerTitle: 'Details',
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name="clipboard-text" size={26} color={focused ? '#2e2e2e' : "#89898c"} />
            ),
        },
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            headerTitle: 'Details',
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                <MaterialIcons name="shopping-cart" size={26} color={focused ? '#2e2e2e' : "#89898c"} />
            ),
        },
    },

}, {
    tabBarOptions: {
        showLabel: false,
        activeBackgroundColor: '#efeff4',
        inactiveBackgroundColor: '#efeff4',
        style: {
            backgroundColor: '#efeff4',
            borderTopColor: '#efeff4',
            paddingHorizontal: 30,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 3.84,
            borderTopWidth: 0,
            elevation: -10,
        },
        

    },
    initialRouteName: 'Home'
}
);

const ImageHeader = props => { 
    return (
        <View style={{ height: 170,width:Dimensions.get('window').width, justifyContent: 'flex-end', padding: 5, backgroundColor: 'transparent' }}>
            <Image
                style={{ height: 170, width:Dimensions.get('window').width, position: 'absolute', top: 0, left: 0 }}
                source={require('./assets/bgheader.png')}
                resizeMode="cover"
            />
            <Header {...props} style={{ backgroundColor: 'transparent', justifyContent: 'center' }} />
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',position:'relative',bottom:15}}>
            <MaterialIcons  name="location-on" size={16} color="white" />
                <LatoText fontName="Lato-Light" fonSiz={16} col='white' text="Hemisphere Black 32" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.wrapperText}>
                    <EvilIcons name="search" size={26} color="#89898c" />
                    <TextInput
                        style={styles.textI}
                        placeholder="Search..."
                    />
                </View>

            </View>
        </View>
    );
}

const DrawerNavigator = createDrawerNavigator({
    Home: MainTabs,
    Login,
    SignUp,
}, {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
        header: props => <ImageHeader {...props} />,
        title: 'KHAN MARKET',
        headerStyle: { backgroundColor: 'transparent', },
        headerTintColor: 'white',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow: 1,
            alignSelf: 'center',
            fontWeight: 'bold'
        },
        headerRight: <View style={{ paddingRight: 10 }} >
             <MaterialIcons name="shopping-cart" size={26} color="white" />
        </View>,
        headerLeft:
            <TouchableHighlight style={{ paddingLeft: 10 }} onPress={() => navigation.toggleDrawer()}>
                <Image source={require('./assets/menu-1.png')}></Image>
            </TouchableHighlight >
    }),

    initialRouteName: 'Home',
    drawerOpenRoute: 'drawerOpen',
    drawerCloseRoute: 'drawerClose',
    drawerToggleRoute: 'drawerToggle',
});
const RootStack = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
        MainTabs: DrawerNavigator
    },
    {
        initialRouteName: 'MainTabs',
    }

);

const AppContainer = createAppContainer(RootStack);
export default AppContainer
const styles = StyleSheet.create({
    textI: {
        width: '100%',
        paddingLeft: 5,
        fontSize: 17,
    },
    wrapperText: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '94%',
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 5,
        paddingLeft: 20,
        marginLeft: 10,
        marginBottom: 10,
        opacity: 0.9,

        alignItems: 'center'
    }
});
