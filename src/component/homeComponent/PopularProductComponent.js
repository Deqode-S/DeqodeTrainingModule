import React from "react";
import { View, Text, Dimensions } from 'react-native';
import CategoryComponent from "./CategoryComponent";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class PopularProduct extends React.Component {
    render() {
        return (
            <View>
                <CategoryComponent
                    source={this.props.source}
                    categoryText={this.props.categoryText}
                    PopularContainer={{ height: 100, width: windowWidth / 5, backgroundColor: '#fff', borderTopRightRadius: 10, borderTopLeftRadius: 10, margin: 9, }}
                    PopularImage={{ height: 80, width: 80, backgroundColor: '#D9D9D9', borderRadius: 10 }}
                    ImageContainer={{ height: 80, width: 80, borderRadius: 10, }}
                    PopularText={{ marginTop: 10, }}

                />
            </View>
        )
    }
}

export default PopularProduct;