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
import {
    Entypo, Feather, FontAwesome,
    EvilIcons,
    AntDesign
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
                <Feather name="clock" size={26} color={focused ? '#2e2e2e' : "#89898c"} />
            ),
        },
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            headerTitle: 'Details',
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                <Entypo name="shopping-cart" size={26} color={focused ? '#2e2e2e' : "#89898c"} />
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
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
        },

    },
    initialRouteName: 'Home'
}
);

const ImageHeader = props => {
    return (
        <View style={{ height: 170, justifyContent: 'flex-end', padding: 5, backgroundColor: 'transparent' }}>
            <Image
                style={{ height: 170, position: 'absolute', top: 0, left: 0 }}
                source={require('./assets/bgheader.png')}
                resizeMode="cover"
            />
            <Header {...props} style={{ backgroundColor: 'transparent', justifyContent: 'center' }} />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.wrapperText}>
                    <EvilIcons name="search" size={34} color="#89898c" />
                    <TextInput
                        style={styles.textI}
                        placeholder="Search in Khan Market..."
                    />
                </View>
                <View style={{ width: '15%', justifyContent: 'center', alignContent: 'center', paddingLeft: 10, marginBottom: 10 }} >
                    <AntDesign name="filter" size={34} color="white" />
                </View>
                
            </View>
            <View style={{ flexDirection: 'row',paddingLeft:10, marginTop:10,backgroundColor: 'rgba(252, 252, 252, 0.3)',margin:-5}}>
                    <EvilIcons style={{marginTop:4,backgroundColor:'transparent'}} name="location" size={26} color="white" />
                    <Text style={{color:'white',fontSize:20,backgroundColor:'transparent'}}>Hemisphere black 32</Text>
            </View>
        </View>
    );
}
const DrawerNavigator = createDrawerNavigator({
    Home: { screen: MainTabs },
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
        headerRight: <View></View>,
        headerLeft:
            <TouchableHighlight onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" size={32} color="white" />
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
        width: '80%',
        paddingLeft: 5,
        fontSize: 17,
    },
    wrapperText: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '85%',
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderRadius: 50,
        paddingLeft: 20,
        marginLeft: 10,
        marginBottom: 10,
        opacity: 0.9

    }
});
