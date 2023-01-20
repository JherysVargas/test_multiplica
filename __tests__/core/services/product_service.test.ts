import axios, {AxiosResponse} from 'axios';
import ProductService from '../../../lib/core/services/product_service';

const productsMocks = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
];

describe('Product Service', () => {
  describe('getProducts', () => {
    it('With Success', async () => {
      axios.interceptors.response.use((response: AxiosResponse<any, any>) => {
        return {
          ...response,
          data: productsMocks,
        };
      });
      const service = new ProductService(axios);

      const data = await service.getProducts();
      expect(data).toEqual(productsMocks);
    });
    it('With Error', async () => {
      axios.interceptors.response.use((response: AxiosResponse<any, any>) => {
        return {
          ...response,
          status: 400,
          data: null,
        };
      });
      const service = new ProductService(axios);

      const data = await service.getProducts();
      expect(data.length).toBe(0);
    });
  });
});
