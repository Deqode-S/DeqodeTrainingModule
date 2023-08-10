import React from "react";
import { View, Text, FlatList } from 'react-native';
import CategoryComponent from "../component/homeComponent/CategoryComponent";
import PopularProduct from "../component/homeComponent/PopularProductComponent";
import FlashSale from "../component/homeComponent/FlashSaleComponent";
import ProductListing from "../component/homeComponent/ProductListingComponent";
import { flashSale, popularComponentArray, popularProducts, productList } from "../json/HomeJson";
import HeaderComponent from "../component/common/CustomHeader";
import { commonStyle } from "../style/CommonStyle/Styles";
import { AppConstant } from "../appConstant/Constant";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    ListHeaderComponent = () => {
        return (
            <>
                <FlatList
                    data={popularComponentArray}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <CategoryComponent
                                    source={{ uri: item.uri }}
                                    categoryText={item.name}
                                    ImageContainer={[commonStyle.ImageContainer]}
                                    onPress={() => this.props.navigation.navigate('productlistingpage', {
                                        brand: item.brand, name: item.name, brandType: item.brandType
                                    })}
                                />
                            </>
                        )
                    }}
                    numColumns={4}
                />
                <Text style={[commonStyle.TextProduct]}>{AppConstant.Popular_Products}</Text>
            </>
        )
    }

    flashSaleComponent = () => {
        return (
            <View>
                <Text style={[commonStyle.TextProduct1]}>Just for You !</Text>
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
                                    brandPrice={item.brandPrice}
                                    discountPrice={item.discountPrice}
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
                <Text style={[commonStyle.TextProduct]}>Flash Sale</Text>
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
            <View>
                <HeaderComponent
                    home={true}
                    ProductDescription={true}
                />
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
                                    onPress={() => this.props.navigation.navigate('Pdp', { item: item })}
                                />
                            </>
                        )
                    }}
                    numColumns={4}
                />
            </View>
        )
    }
}

export default HomeScreen;