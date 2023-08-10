import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListing from "../component/homeComponent/ProductListingComponent";
import productListingCategory from '../component/homeComponent/ProductListingComponent';
import HomeScreen from "../screen/HomeScreen";
import TodoList from "../screen/ListScreen";
import StackNavigations from "./StackNavigations";
import productListing from "../screen/ProductListing";
import { Image } from "react-native";
import WishlistScreen from "../screen/WishlistScreen";
import CartScreen from "../screen/CartScreen";
import LoginScreen from "../screen/LoginScreen";

const Tab = createBottomTabNavigator();

const TabNavigations = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
             initialRouteName="Home"
            >
                <Tab.Screen
                    name="Home"
                    component={StackNavigations}
                    options={{
                        tabBarIcon: () => (
                          <Image
                            style={{height:32, width:30,}}
                            source={require('../assests/icon/homes.png')}
                         />
                       ), 
                 }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarIcon: () => (
                            <Image
                            style={{height:32, width:30,}}
                            source={require('../assests/icon/cart.png')}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Message"
                    component={StackNavigations}
                    options={{
                        tabBarIcon: () => (
                            <Image
                            style={{height:32, width:30}}
                            source={require('../assests/icon/message.png')}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Wishlist"
                    component={WishlistScreen}
                    options={{
                        tabBarIcon: () => (
                            <Image
                            style={{height:25, width:25}}
                            source={require('../assests/icon/wishlist.png')}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={LoginScreen}
                    options={{
                        tabBarIcon: () => (
                            <Image
                            style={{height:25, width:25}}
                            source={require('../assests/icon/account.png')}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigations;