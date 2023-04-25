import React from "react";
import { Text, View } from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";

const HeaderComponent = ({ home }) => {

    return (
        <View style={[commonStyle.mainContainer]}>
            {
                home ?
                    // <TextComponent
                    //     text={"HeaderText"}
                    // /> :

                    <ImageComponent
                        source={require("../../assests/icon/logo.png")}
                    /> :
                    <TextComponent
                        text={"Sakshi"}
                    />
            }

        </View>
    )

}
export default HeaderComponent;