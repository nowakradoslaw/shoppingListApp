import React from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '@/context/AppProvider';
import { FlatList, Pressable } from 'react-native-gesture-handler';
import { styles } from '@/screens/ProductsList/ProductsList.style';
import ProductsListModal from '@/components/ProductsListModal/ProductsListModal';
import Ionicons from '@expo/vector-icons/Ionicons';
const ProductsList = () => {
  const { products, deleteProductFromProducts } = React.useContext(AppContext);
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={styles.flatListItemWrapper}>
            <Text style={styles.flatListItemText}>{index + 1}. </Text>
            <Text style={styles.flatListItemText}>{item.name}</Text>
            <Pressable onPress={() => deleteProductFromProducts(item.id)}>
              <Ionicons name='trash-outline' size={24} color='red' />
            </Pressable>
          </View>
        )}
      />
      <Pressable style={styles.button} onPress={() => setVisibleModal(true)}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <ProductsListModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />
    </View>
  );
};

export default ProductsList;
