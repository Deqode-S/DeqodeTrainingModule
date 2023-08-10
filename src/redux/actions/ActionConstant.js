import { add_to_cart, add_to_wishlist, remove_from_cart, remove_from_wishlist } from "../constants";

export const addItemToCart = data => ({
    type: add_to_cart,
    payload: data,
});

export const removeFromCart = index=> ({
    type: remove_from_cart,
    payload: index,
});

export const addToWishlist = data => ({
    type: add_to_wishlist,
    payload: data
  
});

export const removeFromWishlist = index => ({
    type: remove_from_wishlist,
    payload: index
    
});

