import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, FlatList, TouchableOpacity } from "react-native";
import HeaderComponent from "../component/common/CustomHeader";
import { brandList, } from "../json/HomeJson";
import ProductListing from "../component/homeComponent/ProductListingComponent";
import BrandLists from "../component/BrandListComponent";
import DropdownCategory from "../component/DropdownCategory";

const productListing = ({ navigation, route }) => {
    const [list, setList] = useState(route?.params?.brand)
    const [toggle, setToggle] = useState(false)
    const [istoggle, setIsToggle] = useState(false)
    const [istoggle1, setIsToggle1] = useState(false)

    const toggleModal = () => {
        setToggle(!toggle)
        setIsToggle1(false)
        setIsToggle(false)
    }

    const toggleModal1 = () => {
        setIsToggle(!istoggle)
        setToggle(false)
        setIsToggle1(false)
    }

    const toggleModal2 = () => {
        setIsToggle1(!istoggle1)
        setToggle(false)
        setIsToggle(false)
    }

    ListHeaderComponent = () => {
        return (
            <View style={{ backgroundColor: '#D9D9D9', bottom: 5 }}>
                <FlatList
                    data={brandList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <BrandLists
                                source={{ uri: item.uri }}
                            />
                        )
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent
                onPress={() => navigation.pop()}
                textHeader={true}
                headerName={route?.params?.name}
                dropDown={true}
                toggle={toggle}
                istoggle={istoggle}
                istoggle1={istoggle1}
                toggleModal={toggleModal}
                toggleModal1={toggleModal1}
                toggleModal2={toggleModal2}
                ProductDescription={true}
            />
            <View>
                <FlatList
                    ListHeaderComponent={this.ListHeaderComponent}
                    data={list}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <ProductListing
                                    source={{ uri: item.branduri }}
                                    categoryText={item.brandtype}
                                    brandPrice={item.brandPrice}
                                    discountPrice={item.discountPrice}
                                    flashSaleFlag1
                                    ratingBar
                                    onPress={() => navigation.navigate('Pdp', { item: item.branduri })}
                                />
                            </>
                        )
                    }}
                    numColumns={2}
                />
                {toggle && (
                    <DropdownCategory
                        SubStyle={{ left: 0 }}
                        text1="H.M"
                        text2="ZARA"
                        text3="BATA"
                        text4="BIBA"
                        text5="RAUPH"
                    />
                )}

                {istoggle && (
                    <DropdownCategory
                        SubStyle={{ left: 120 }}
                        text1="Kids"
                        text2="Men"
                        text3="Women"
                        text4="Electronics"
                        text5="Furniture"
                    />
                )}

                {istoggle1 && (
                    <DropdownCategory
                        SubStyle={{ left: 270 }}
                        text1="Delhi"
                        text2="Mumbai"
                        text3="Indore"
                        text4="Lucknow"
                        text5="Gujrat"
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default productListing;