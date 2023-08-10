import React, { useState } from "react";
import { FlatList, Text, View, } from "react-native";
import HeaderComponent from "../component/common/CustomHeader";
import HeartComponent from "../component/common/HeartComponent";
import { popularProducts, productList } from "../json/HomeJson";
import ProductDescriptionComponent from "../component/common/ProductDescriptionComponent";
import { AppConstant } from "../appConstant/Constant";


const WishlistScreen = ({route}) => {
    
    const [isliked, setIsLiked] = useState([])
    const [id, setId] = useState()

    const addItemtoWishlist = () => {
        let newArray = [...isliked]
        setIsLiked(isliked)
    }

    const removeItemfromWishlist = (id) => {
        let newArray = [...isliked]
        newArray.splice(id, 1)
        setIsLiked(newArray);
    }

      return(
        <View>
        <View>
            <HeaderComponent
              ProductDescription={false}
            />
        </View>
            <FlatList
              data={popularProducts}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                return(
                    <View style={{flexDirection:'row', }}>
                       <ProductDescriptionComponent
                         source={{uri: item.uri}}
                       />
                       <Text>{AppConstant.pdp_Text}</Text>
                    </View>
                )
              }}
            />
        </View>
      )
}
export default WishlistScreen;