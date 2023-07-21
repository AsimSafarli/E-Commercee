import { configureStore } from '@reduxjs/toolkit'
import CategorySlice from '../Slice/Category/CategorySlice'
import ProdutcSlice from '../Slice/Products/ProdutcSlice'
import CartSlice from '../Slice/Cart/CartSlice'

export const store = configureStore({
  reducer: {
    categories : CategorySlice,
    products:ProdutcSlice,
    cart:CartSlice
  }
})