import { Product_Page } from "../constants";

const initialState = {
   update: []
}

const Reducer = (state = initialState, action) => {
     switch(action.type){
        case Product_Page:
       return {
          ...state,
          update: action.payload
       }
        default: 
        return state       
     }
}