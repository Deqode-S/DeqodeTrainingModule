import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import HeaderComponent from "./CustomHeader";

export default class HeaderDropdown extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     isToggle: false,
        //     isToggle1: false,
        //     toggle: false
        // }
    }
    render() {
        { console.log("toggle===", this.props) }
        return (
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <View style={{ alignItems: 'center', flex: 1 / 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>All</Text>
                        <Image
                            source={require('../../assests/icon/icon_1.png')}
                            style={{ left: 5 }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.props.toggleModal()} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, padding: 5 }}>
                        <Text style={{ fontWeight: 600,}}>Brand</Text>
                        <Image
                            source={require('../../assests/icon/Vector.png')}
                            style={{ left: 5 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 5, left: 3, alignItems: 'center', flex: 1 / 3 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ left: 4 }}>Mail</Text>
                        <Image
                            source={require('../../assests/icon/Mall.png')}
                            style={{ left: 5 }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.props.toggleModal1()} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Text style={{ fontWeight: 600, }}>Sub Category</Text>
                        <Image
                            source={require('../../assests/icon/Vector.png')}
                            style={{ left: 5 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 5, left: 3, alignItems: 'center', flex: 1 / 3 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ left: 4 }}>Free delivery</Text>
                        <Image
                            source={require('../../assests/icon/Mall.png')}
                            style={{ left: 5 }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.props.toggleModal2()} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Text style={{ fontWeight: 600, }}>Location</Text>
                        <Image
                            source={require('../../assests/icon/Vector.png')}
                            style={{ left: 5 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}