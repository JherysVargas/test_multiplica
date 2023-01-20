import axios from 'axios';
import {url} from '../../../core/constants/constant';
import {
  setProductsList,
  setSelectedFilter,
  setSelectedProduct,
} from '../../../core/redux/reducers/products_reducer';
import {useDispatch} from 'react-redux';
import {FilterType} from '../../../data/enums/filters_enum';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '../../../data/interfaces/product_interface';
import {RootStackParamList} from '../../../core/routes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type listProductScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'ListProducts'
>;

export const useProductListController = () => {
  const dispatch = useDispatch();
  const {navigation} = useNavigation<listProductScreenProp>();

  const getProdcts = async () => {
    const {data} = await axios.get(url);
    if (data) {
      dispatch(setProductsList(data));
    }
  };

  const handleSelectedFilter = (value: FilterType) => {
    dispatch(setSelectedFilter(value));
  };

  const handleDetailProduct = (product: IProduct) => {
    dispatch(setSelectedProduct(product));
    navigation.navigate('DetailProduct');
  };

  return {
    getProdcts,
    handleDetailProduct,
    handleSelectedFilter,
  };
};
