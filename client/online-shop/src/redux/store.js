import {configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./product_slice/ProductSlice"
const store = configureStore({
    reducer:{
      products:ProductSlice
    
    }
})
export default store