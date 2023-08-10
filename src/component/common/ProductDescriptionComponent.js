import React from "react";
import { View, Dimensions } from 'react-native';
import CategoryComponent from "../homeComponent/CategoryComponent";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProductDescriptionComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View> 
                <CategoryComponent
                    source={this.props.source}
                    categoryText={this.props.categoryText}
                    PopularContainer={{ height: 400, width: windowWidth / 1.1, alignSelf: 'center', borderRadius: 20, }}
                    PopularImage={{ height: 400, width: windowWidth / 1.1, backgroundColor: '#D9D9D9', alignSelf: 'center', borderRadius: 20, }}
                    ImageContainer={{ height: 400, width: windowWidth / 1.1, borderRadius: 20, }}
                />
            </View>
        )
    }
}

export default ProductDescriptionComponent;