import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderComponent from "./src/component/common/CustomHeader";
import TextComponent from "./src/component/common/TextComponent";
import ImageComponent from "./src/component/common/ImageComponent";
import TodoList from "./src/screen/TodoList";



const App = () => {
   return (
      <SafeAreaView style={{ flex: 1 }}>
      <TodoList/>
      </SafeAreaView>
   )
}

export default App;