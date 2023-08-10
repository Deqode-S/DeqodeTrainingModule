import React from "react";
import {View, Text} from 'react-native';
import { Provider } from "react-redux";
import Store from "./redux/Store";
import App from "../App";

const MainContainer = () => {
    return(
        <>
        <Provider store={Store}>
          {/* <App/> */}
        </Provider>
      </>
    )
}
export default MainContainer;