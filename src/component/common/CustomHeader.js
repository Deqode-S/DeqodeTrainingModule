import React from "react";
import { Text, View } from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";

const HeaderComponent = () => {
 
    return(
        <View style={[commonStyle.mainContainer]}>
            <Text>Header</Text>
        </View>
    )

}
export default HeaderComponent;