import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//components
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import ProductsList from '@/screens/ProductsList/ProductsList';
import SpecialOffertsList from '@/screens/specialOffertsList/SpecialOffertsList';

const Drawer = createDrawerNavigator();

export default function MainMenu() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Products list' component={ProductsList} />
      <Drawer.Screen name='Special offerts' component={SpecialOffertsList} />
    </Drawer.Navigator>
  );
}
