import {createSlice} from '@reduxjs/toolkit';
import {initialStateProductReducer} from './initial_state';

const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProductReducer,
  reducers: {
    setProductsList(state, action) {
      state.productList = action.payload;
    },
    setSelectedProduct(state, action) {
      state.detailProduct = action.payload;
    },
  },
});

export const {setProductsList, setSelectedProduct} = productsSlice.actions;
export default productsSlice.reducer;
