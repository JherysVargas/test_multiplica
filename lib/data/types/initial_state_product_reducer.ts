import {IProduct} from '../interfaces/product_interface';

declare interface InitialStateProductReducer {
  productList: IProduct[];
  detailProduct: IProduct | undefined;
}

export default InitialStateProductReducer;
