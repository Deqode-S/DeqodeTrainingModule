import React, { useState } from "react";
import { Image, Dimensions, TouchableOpacity, View } from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const HeartComponent = ({ source, onPress}) => {

    return (
        <View>
        <TouchableOpacity onPress={onPress}>
            <Image
              style={[commonStyle.imageContainer3]}
              source={source}
            />
        </TouchableOpacity>
        </View>
    )
}
export default HeartComponent;