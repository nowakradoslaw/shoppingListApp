import { createDrawerNavigator } from '@react-navigation/drawer';
//components
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import NewProduct from '@/screens/NewProductSpecialOffert/NewProductSpecialOffert';
import SpecialOffer from '@/screens/SpecialOffer/SpecialOffer';
import ShoppingList from '@/screens/ShoppingList/ShoppingList';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name='New product'
        component={NewProduct}
        options={{ title: 'New product' }}
      />
      <Drawer.Screen
        name='Special offer'
        component={SpecialOffer}
        options={{ title: 'Special offer' }}
      />
      <Drawer.Screen
        name='Shopping list'
        component={ShoppingList}
        options={{ title: 'Shopping list' }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
