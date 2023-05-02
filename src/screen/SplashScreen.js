import React from "react";
import { View, Image, ImageBackground } from 'react-native';
import { commonStyle } from "../style/CommonStyle/Styles";

const Splashscreen = () => {
    return (
        <View>
            <ImageBackground
                source={require('../assests/icon/splash.png')}
                style={[commonStyle.splashImage]}
            >
                <Image
                    source={require('../assests/icon/logo.png')}
                    style={[commonStyle.splashLogo]}
                />
            </ImageBackground>
        </View>
    )
}
export default Splashscreen;