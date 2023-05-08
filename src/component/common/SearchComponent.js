import React from "react";
import { Image , Dimensions, TouchableOpacity} from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SearchComp = ({source}) => {

    return(
        <TouchableOpacity>
            <Image
                style={[commonStyle.imageContainer2]}
                source={source}
            />
        </TouchableOpacity>
    )
}
export default SearchComp;