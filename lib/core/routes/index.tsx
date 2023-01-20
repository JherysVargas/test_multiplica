import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import ListProducts from '../../ui/views/product_list/index';
import DetailProduct from '../../ui/views/detail_product';

export type RootStackParamList = {
  ListProducts: undefined;
  DetailProduct: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListProducts">
        <Stack.Screen
          name="ListProducts"
          component={ListProducts}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
