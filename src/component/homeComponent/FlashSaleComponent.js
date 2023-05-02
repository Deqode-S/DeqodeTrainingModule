import React from "react";
import {View, Text,Dimensions} from 'react-native';
import CategoryComponent from "./CategoryComponent";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class FlashSale extends React.Component{
    render(){
        return(
            <>
                <CategoryComponent
                  source={this.props.source}
                  categoryText={this.props.categoryText}
                  PopularContainer={{height: 150, width: windowWidth/3.5,  borderTopRightRadius: 10, borderTopLeftRadius: 10,margin:9, }}
                  PopularImage={{height:110, width:112, backgroundColor: '#D9D9D9', borderRadius:10}}
                  ImageContainer={{height: 80, width:80, borderRadius:10,}}
                  PopularText={{marginTop:10,}}
                  flashSaleFlag={this.props.flashSaleFlag}
                  flashBar={this.props.flashBar}
                  flashBar1={this.props.flashBar1}
                />
            </>
        )
    }
}

export default FlashSale;