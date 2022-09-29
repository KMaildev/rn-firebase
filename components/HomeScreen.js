import React from "react";
import { View, Text } from "react-native";
import RegisterUser from "./RegisterUser";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginUser from "./LoginUser";

const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Register User" component={RegisterUser} />
            <Drawer.Screen name="Login User" component={LoginUser} />
        </Drawer.Navigator>
    )
}

export default HomeScreen