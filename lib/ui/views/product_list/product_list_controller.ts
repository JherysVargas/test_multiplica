import axios from 'axios';
import {url} from '../../../core/constants/constant';
import {setProductsList} from '../../../core/redux/reducers/products_reducer';
import {useDispatch} from 'react-redux';

export const useProductListController = () => {
  const dispatch = useDispatch();

  const getProdcts = async () => {
    const {data} = await axios.get(url);
    if (data) {
      dispatch(setProductsList(data));
    }
  };

  return {
    getProdcts,
  };
};
