import React from "react";
import { Text, View } from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";
import SearchComp from "./SearchComponent";
import ArrowComponent from "./ArrowComponent";

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
                    <ArrowComponent
                       source={require("../../assests/icon/arrow.png")}
                    />
            }
            <SearchComp
              source={require("../../assests/icon/clip.png")}
            />

        </View>
    )

}
export default HeaderComponent;