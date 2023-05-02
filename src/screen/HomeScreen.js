import React from "react";
import { View, Text, ScrollView, FlatList, } from 'react-native';
import CategoryComponent from "../component/homeComponent/CategoryComponent";
import PopularProduct from "../component/homeComponent/PopularProductComponent";
import FlashSale from "../component/homeComponent/FlashSaleComponent";
import ProductListing from "../component/homeComponent/ProductListingComponent";
import { flashSale, popularComponentArray, popularProducts, productList } from "../json/HomeJson";

class HomeScreen extends React.Component {
    ListHeaderComponent = () => {
        return (
            <>
                <FlatList
                    //ListHeaderComponent={ListHeaderComponent}
                    data={popularComponentArray}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <CategoryComponent
                                source={{ uri: item.uri }}
                                categoryText={item.name}
                                ImageContainer={{ height: 55, width: 55, borderRadius: 35, }}

                            />
                        )
                    }}
                    numColumns={4}
                // horizontal={true}

                />
                <Text style={{ fontSize: 16, margin: 10, fontWeight: '400', top: 10, color: '#505050' }}>Popular Products</Text>
            </>

        )
    }
    flashSaleComponent = () => {
        return (
            <View>
                <Text style={{ fontSize: 30, fontWeight: '400', alignSelf: 'center', color: '#505050' }}>Just for You !</Text>
                <FlatList
                    data={productList}
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
                                />
                            </>
                        )

                    }}
                    numColumns={2}
                />
            </View>
        )
    }

    ListFooterComponent = () => {
        return (
            <>
                <Text style={{ fontSize: 16, margin: 10, fontWeight: '400', top: 10, color: '#505050' }}>Flash Sale</Text>
                <FlatList
                    data={flashSale}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <FlashSale
                                    source={{ uri: item.uri }}
                                    categoryText={item.flashName}
                                    flashSaleFlag
                                    flashBar
                                    flashBar1
                                />
                            </>
                        )
                    }

                    }
                    numColumns={4}
                    ListFooterComponent={this.flashSaleComponent}
                />
            </>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    ListHeaderComponent={this.ListHeaderComponent}
                    ListFooterComponent={this.ListFooterComponent}
                    data={popularProducts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (

                            <>
                                <PopularProduct
                                    source={{ uri: item.uri }}
                                    categoryText={item.popularName}
                                />
                            </>
                        )
                    }}
                    numColumns={4}
                //horizontal={true}
                />

            </View>


        )
    }
}

export default HomeScreen;