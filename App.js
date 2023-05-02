import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderComponent from "./src/component/common/CustomHeader";
import TextComponent from "./src/component/common/TextComponent";
import ImageComponent from "./src/component/common/ImageComponent";
import TodoList from "./src/screen/TodoList";
import SearchComp from "./src/component/common/SearchComponent";
import Splashscreen from "./src/screen/SplashScreen";
import HomeScreen from "./src/screen/HomeScreen";



const App = (home) => {
   const [loading, setLoading] = useState(true);
     
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);

   if(loading){
      return <Splashscreen/>
   }

   return (
      <SafeAreaView style={{ flex: 1 }}>
      {/* <TodoList/> */}
      <HeaderComponent
        home={home}
      />
      <HomeScreen/>
      </SafeAreaView>
   )
}

export default App;