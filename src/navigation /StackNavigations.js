import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import TodoList from "../screen/ListScreen";
import TabNavigations from "./TabNavigations";
import productListing from "../screen/ProductListing";
import ProductDescription from "../screen/ProductDetailPage";

const Stack = createNativeStackNavigator();

const StackNavigations = () => {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="productlistingpage"
                component={productListing}
            />
            <Stack.Screen
                name="Pdp"
                component={ProductDescription}
            />

        </Stack.Navigator >
    )
}



export default StackNavigations;