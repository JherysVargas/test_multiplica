import axios from 'axios';
import {IProduct} from '../../data/interfaces/product_interface';
import {url} from '../constants/constant';

export class ProductService {
  static async getProducts(): Promise<IProduct[]> {
    const {data, status} = await axios.get(url);

    if (status === 200) {
      return data;
    }
    return [];
  }
}
