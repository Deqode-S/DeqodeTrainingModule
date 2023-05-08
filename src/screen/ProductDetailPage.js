import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from "../component/common/CustomHeader";
import { Pdp, PdpColor, PdpSize, productList } from "../json/HomeJson";
import ProductDescriptionComponent from "../component/common/ProductDescriptionComponent";
import { commonStyle } from "../style/CommonStyle/Styles";
import ProductListing from "../component/homeComponent/ProductListingComponent";
import { AppConstant } from "../appConstant/Constant";
import ButtonComponent from "../component/ButtonComponent";

const ProductDescription = ({ navigation, route }) => {
    //console.log("routew===", route.params.item)
    const ListHeaderComponent = () => {
        return (<>
            <Text style={[commonStyle.TextProduct1]}>Jas Oversized</Text>
            <ProductDescriptionComponent
                source={route.params.item}
            />
            <Text style={{ fontSize: 20, margin: 10, color: '#505050', fontWeight: 600 }}>Select Size</Text>
            <FlatList
                data={PdpSize}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9D9D9', margin: 5, marginLeft: 15, borderRadius: 5 }}>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
                horizontal={true}
            />
            <Text style={{ fontSize: 20, margin: 10, color: '#505050', fontWeight: 600 }}>Select Colour</Text>

            <FlatList
                data={PdpColor}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 35, width: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: item, margin: 5, marginLeft: 15, borderRadius: 5 }}>
                        </View>
                    )
                }}
                horizontal={true}
            />

            <Text style={{ fontSize: 20, margin: 10, color: '#505050', fontWeight: 600 }}>Details</Text>
            <Text style={{ margin: 15, textAlign: 'left' }}>{AppConstant.pdp_Text}</Text>
            <Text style={[commonStyle.TextProduct1, { fontSize: 20, alignSelf: 'flex-start', margin: 10, top: 5 }]}>See more</Text>
        </>


        )
    }
    return (
        <>
            <HeaderComponent
                onPress={() => navigation.pop()}
            />
            <FlatList
                data={productList}
                ListHeaderComponent={ListHeaderComponent}
                keyExtractor={(item) => item.id}
                style={{ top: 10 }}
                renderItem={({ item }) => {
                    return (
                        <>
                            <ProductListing
                                source={{ uri: item.uri }}
                                categoryText={item.ListName}
                                flashSaleFlag1
                                ratingBar
                                brandPrice={item.brandPrice}
                                discountPrice={item.discountPrice}
                            />
                        </>
                    )
                }}
                numColumns={2}
            />
            <View style={{ height: 60, width: '100%',flexDirection:'row', justifyContent:'space-between', backgroundColor:'white'}}>
                <Text style={{top: 15, fontSize: 25, color:'red', marginLeft:10}}>$200</Text>
                <TouchableOpacity>
                    <Text style={[commonStyle.plusStyle]}>Add to Cart</Text>
                </TouchableOpacity>
                {/* <ButtonComponent/> */}
            </View>
        </>
    )
}
export default ProductDescription;