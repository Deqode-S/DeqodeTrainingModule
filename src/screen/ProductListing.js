import React, { useState, useEffect } from "react";
import { Image, SafeAreaView, Text, View, FlatList, TouchableOpacity } from "react-native";

import HeaderComponent from "../component/common/CustomHeader";
import { brandList, productList } from "../json/HomeJson";
import ProductListing from "../component/homeComponent/ProductListingComponent";
import TabNavigations from "../navigation /TabNavigations";
import { NavigationContainer } from "@react-navigation/native";
import BrandLists from "../component/BrandListComponent";

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
                                    onPress={() => navigation.navigate('Pdp', {item: item.branduri})}
                                />
                            </>
                        )
                    }}
                    numColumns={2}
                />
                {toggle && (
                    <View style={{ height: 100, width: 110, backgroundColor: '#243B97', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, opacity: 0.8 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, marginTop: 5 }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>H.M</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Bata</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>ZARA</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>RauphLauren</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>BIBA</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}

                {istoggle && (
                    <View style={{ height: 100, width: 110, backgroundColor: '#243B97', position: 'absolute', left: 130, right: 0, top: 0, bottom: 0, opacity: 0.8 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, marginTop: 5 }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Kids</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Men</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Women</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Electronic</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Grocery</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}

                {istoggle1 && (
                    <View style={{ height: 100, width: 110, backgroundColor: '#243B97', position: 'absolute', left: 270, right: 0, top: 0, bottom: 0, opacity: 0.8 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, marginTop: 5 }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Delhi</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Indore</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Bhopal</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Lucknow</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                            <Image
                                source={require('../assests/icon/Ellipse6.png')}
                                style={{ right: 4 }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>Mumbai</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default productListing;