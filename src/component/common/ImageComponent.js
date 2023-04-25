import React from "react";
import { Image , Dimensions} from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ImageComponent = ({source}) => {

    return(
       <Image
       style={[commonStyle.imageContainer]}
       source={source}
       />
    )
}
export default ImageComponent;