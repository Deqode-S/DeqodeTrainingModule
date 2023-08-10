import React from "react";
import { View, Text,Image ,TouchableOpacity, StyleSheet} from "react-native";

const DropdownCategory = ({ text1, text2, text3, text4, text5, SubStyle }) => {
    return (
        <View style={[styles.container, SubStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, marginTop: 5 }}>
                <Image
                    source={require('../assests/icon/Ellipse6.png')}
                    style={{ right: 4 }}
                />
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>{text1}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                <Image
                    source={require('../assests/icon/Ellipse6.png')}
                    style={{ right: 4 }}
                />
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>{text2}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                <Image
                    source={require('../assests/icon/Ellipse6.png')}
                    style={{ right: 4 }}
                />
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>{text3}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                <Image
                    source={require('../assests/icon/Ellipse6.png')}
                    style={{ right: 4 }}
                />
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>{text4}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', left: 10, }}>
                <Image
                    source={require('../assests/icon/Ellipse6.png')}
                    style={{ right: 4 }}
                />
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 400, fontStyle: 'normal', }}>{text5}</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 100, 
        width: 110, 
        backgroundColor: 'grey', 
        position: 'absolute', 
        right: 0, 
        top: 0, 
        bottom: 0, 
        opacity: 0.8, 
    }
})
export default DropdownCategory;