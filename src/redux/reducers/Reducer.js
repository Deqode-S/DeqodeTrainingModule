import { add_to_cart, add_to_wishlist, remove_from_cart, remove_from_wishlist } from "../constants";

const Reducer = (initialState = [], action) => {
   switch (action) {
      case add_to_cart:
         return [...initialState, ...action.payload]
      case remove_from_cart:
         const deletedArray = initialState.filter((item, index) => {
            return index !== action.payload;
         })
         return deletedArray;
      case add_to_wishlist:
         return {
            ...state,
            data: action.payload
         }
      case remove_from_wishlist:
         return {
            ...state,
            index: action.payload
         }
      default:
         return initialState
   }
}

export default Reducer;