import React from "react";
import { View, Text, Dimensions, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const ScreenHeight = Dimensions.get("window").height / 2;
const ScreenWidth = Dimensions.get("window").width / 2;


function RegisterUser() {
    return (
        <ScrollView>
            <View style={{ height: ScreenHeight, alignItems: "center", paddingTop: 20 }}>
                <Text style={{ color: "black", fontSize: 22, fontWeight: "bold" }}>
                    Register
                </Text>

                <View style={{ paddingTop: 20 }}>
                    <TextInput placeholder="Add new user" style={{ borderWidth: 1, borderColor: "gray", padding: 10, width: ScreenWidth }} />
                    <Button title="Save" style={{ color: "blue" }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default RegisterUser