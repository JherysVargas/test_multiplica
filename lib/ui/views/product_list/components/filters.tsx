import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {FilterType} from '../../../../data/enums/filters_enum';
import {Chevron} from 'react-native-shapes';
import {primaryColor} from '../../../../core/theme/colors';
import {useProductListController} from '../product_list_controller';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../core/redux/config';

const filters: Item[] = [
  {label: 'Todos', value: FilterType.ALL},
  {label: 'Ganados', value: FilterType.POSITIVE},
  {label: 'Canjeados', value: FilterType.NEGATIVE},
];

const _renderChevron: any = () => {
  return <Chevron size={1.2} color={primaryColor} />;
};

const Filters = () => {
  const selectedFilter = useSelector<RootState, FilterType>(
    state => state.products.selectedFilter,
  );
  const {handleSelectedFilter} = useProductListController();

  return (
    <RNPickerSelect
      items={filters}
      style={styles}
      value={selectedFilter}
      onValueChange={handleSelectedFilter}
      placeholder={{}}
      useNativeAndroidPickerStyle={false}
      Icon={_renderChevron}
    />
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    top: 7,
    right: 0,
  },
  inputIOS: {
    fontSize: 16,
    marginRight: 20,
    fontWeight: '600',
    color: primaryColor,
  },
  inputAndroid: {
    fontSize: 16,
    marginRight: 20,
    fontWeight: '600',
    color: primaryColor,
  },
});

export default Filters;
