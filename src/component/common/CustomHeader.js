import React from "react";
import { Text, View } from "react-native";
import { commonStyle } from "../../style/CommonStyle/Styles";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";
import SearchComp from "./SearchComponent";
import ArrowComponent from "./ArrowComponent";
import HeaderDropdown from "./HeaderDropdown";
import HeartComponent from "./HeartComponent";
import WishlistScreen from "../../screen/WishlistScreen";

const HeaderComponent = ({ home,  ProductDescription, onPress, textHeader, headerName, dropDown, toggleModal,toggleModal1,toggleModal2, toggle, istoggle, istoggle1, navigation,}) => {

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={[commonStyle.mainContainer]}>
                {
                    home ?

                        <ImageComponent
                            source={require("../../assests/icon/logo.png")}
                        /> :
                        <ArrowComponent
                            source={require("../../assests/icon/arrow.png")}
                            onPress={onPress}
                        /> 
                }
               
                {
                    textHeader && <TextComponent
                        text={headerName}
                    />
                }
                {
                     ProductDescription ? 
                    <SearchComp
                       source={require("../../assests/icon/clip.png")}
                    /> :
                    <HeartComponent
                       source={require('../../assests/icon/wishlist.png')}
                       //onPress={() => navigation.navigate('wishlistScreen')}
                    /> 
                }
                

            </View>
            {
                dropDown && <HeaderDropdown
                    toggleModal={toggleModal}
                    toggleModal1={toggleModal1}
                    toggleModal2={toggleModal2}
                    toggle={toggle}
                    istoggle={istoggle}
                    istoggle1={istoggle1}
                    
                />
            }
        </View>
    )

}
export default HeaderComponent;