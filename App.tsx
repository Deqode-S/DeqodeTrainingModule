import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderComponent from "./src/component/common/CustomHeader";

const App = () => {
   return(
    <SafeAreaView style={{flex:1}}>
     <HeaderComponent/>
    </SafeAreaView>
   )
}
 
export default App;