import { createDrawerNavigator } from '@react-navigation/drawer';
//components
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import NewProduct from '@/screens/NewProduct/NewProduct';

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
    </Drawer.Navigator>
  );
};

export default AppNavigator;
