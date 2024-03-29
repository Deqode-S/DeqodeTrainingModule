import React from "react";
import { Image, Dimensions, TouchableOpacity } from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ArrowComponent = ({ source, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                style={[commonStyle.imageContainer3]}
                source={source}
            />
        </TouchableOpacity>
    )
}
export default ArrowComponent;