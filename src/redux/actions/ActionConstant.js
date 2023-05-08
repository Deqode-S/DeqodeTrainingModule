import { Product_Page } from "../constants";

export function ProductPage(update) {
    return{
        type: Product_Page,
        payload: update
    }
}