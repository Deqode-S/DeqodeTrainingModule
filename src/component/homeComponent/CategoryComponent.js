import React from "react";
import { View, Text, Image, ImageBackground, Dimensions, TextInput } from 'react-native';
import { commonStyle } from "../../style/CommonStyle/Styles";
import { Rating } from "react-native-ratings";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class CategoryComponent extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const starImage = require('../../assests/icon/Star.png')
        return (
            <View style={[commonStyle.CategoryContainer, this.props.PopularContainer]}>
                <View style={[commonStyle.CategoryImage, this.props.PopularImage]}>
                    <Image
                        source={this.props.source}
                        style={this.props.ImageContainer}
                    />
                </View>

                {
                    this.props.flashBar && this.props.flashBar1 &&
                    <View style={[commonStyle.flashBar]}>
                        <View style={[commonStyle.flashBar1]}>
                            <Text style={{ color: 'white', fontSize: 11, fontWeight: 600, textAlign: 'center' }}>Sold out: 895</Text>
                        </View>
                    </View>
                }
                {
                    !this.props.flashSaleFlag && <Text style={[commonStyle.categoryText, this.props.PopularText]}>{this.props.categoryText}</Text>
                }

                {
                    this.props.flashSaleFlag &&
                    (
                        <View style={{ flexDirection: 'row', width: windowWidth / 3.5, justifyContent: 'space-between', margin: 5, padding: 5 }}>
                            <Text style={{ fontSize: 13 }}>{this.props.categoryText}</Text>
                            <Text style={{ color: 'red' }}>$ 25</Text>
                        </View>
                    )
                }
                <View style={[this.props.ratingStyle]}>
                    {
                        this.props.flashSaleFlag1 &&
                        (
                            <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                <Text style={{ color: 'red' }}>$ 8625</Text>
                                <Text style={{ textDecorationLine: 'line-through' }}>$ 8625</Text>
                            </View>
                        )
                    }
                    {
                        this.props.ratingBar &&
                        (
                            <View style={{ width: '100%' }}>
                                <Rating
                                    ratingImage={starImage}
                                    imageSize={15}
                                    style={{ alignSelf: 'flex-start', left: 10 }}

                                />
                            </View>
                        )
                    }

                </View>

            </View>



        )
    }
}

export default CategoryComponent;