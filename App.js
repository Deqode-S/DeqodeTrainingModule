import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderComponent from "./src/component/common/CustomHeader";
import Splashscreen from "./src/screen/SplashScreen";
import HomeScreen from "./src/screen/HomeScreen";
import StackNavigations from './src/navigation /StackNavigations'
import TabNavigations from "./src/navigation /TabNavigations";
//import { connect } from 'react-redux';


const App = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);

   if (loading) {
      return <Splashscreen />
   }

   return (
      <>
         <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* <StackNavigations/> */}
            <TabNavigations />
         </SafeAreaView>
      </>
   )
}

// const mapStateToProp = () => {
//    update: State.update
// }

export default App;