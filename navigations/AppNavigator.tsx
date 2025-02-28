import { createDrawerNavigator } from '@react-navigation/drawer';
//components
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import NewProduct from '@/screens/NewProduct/NewProduct';
import ProductList from '@/screens/ShoppingList/ShoppingList';

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
        name='Product list'
        component={ProductList}
        options={{ title: 'Product list' }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
