import React from "react";
import { View, Text, Dimensions } from 'react-native';
import CategoryComponent from "./CategoryComponent";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProductListing extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <CategoryComponent
                    source={this.props.source}
                    categoryText={this.props.categoryText}
                    PopularContainer={{ height: 250, width: windowWidth / 2.2, margin: 9, backgroundColor: '#F1F1F1', borderRadius: 10 }}
                    PopularImage={{ height: 150, width: windowWidth / 2.2, backgroundColor: '#D9D9D9', borderRadius: 10 }}
                    ImageContainer={{ height: 150, width: windowWidth / 2.2, borderRadius: 10, }}
                    PopularText={{ marginTop: 10, color: '#505050', alignSelf: 'flex-start', left: 5, fontSize: 14 }}
                    flashSaleFlag1={this.props.flashSaleFlag1}
                    ratingBar={this.props.ratingBar}
                    ratingStyle={{ height: 50, width: "100%", justifyContent: 'space-evenly' }}
                    brandPrice={this.props.brandPrice}
                    discountPrice={this.props.discountPrice}
                    brandType={this.props.brandType}
                    onPress={this.props.onPress}
                />

            </View>
        )
    }
}

export default ProductListing;