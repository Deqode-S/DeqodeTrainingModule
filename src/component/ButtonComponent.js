import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { commonStyle } from "../style/CommonStyle/Styles";

const ButtonComponent = () => {
    <TouchableOpacity>
        <Text style={[commonStyle.plusStyle]}>Add to Cart</Text>
    </TouchableOpacity>
}
export default ButtonComponent;