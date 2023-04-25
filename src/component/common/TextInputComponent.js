import React from "react";
import { Text, View, TextInput } from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";

const Textinput = ({placeholder, value, onChangeText, keyboardType}) => {

    return (
        <View style={commonStyle.container}>
            <TextInput 
                style={[commonStyle.field]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default Textinput;