import React from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '@/context/AppProvider';
import { FlatList, Pressable } from 'react-native-gesture-handler';
import { styles } from '@/screens/ProductsList/ProductsList.style';
import ProductsListModal from '@/components/ProductsListModal/ProductsListModal';
import Ionicons from '@expo/vector-icons/Ionicons';
import SpecialOffertsModal from '@/components/specialOffertsModal/SpecialOffertsModal';
const ProductsList = () => {
  const { products, deleteProductFromProducts } = React.useContext(AppContext);
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
  const [productName, setProductName] = React.useState<string>('');
  const [specialOffertModalVisible, setSpecialOffertModalVisible] =
    React.useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingItem}>#</Text>
        <Text style={styles.headingItem}>Product name</Text>
        <Text style={styles.headingItem}>Transfer</Text>
        <Text style={styles.headingItem}>Delete</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={styles.flatListItemWrapper}>
            <Text style={styles.flatListItemText}>{index + 1}. </Text>
            <Text style={styles.flatListItemText}>{item.name}</Text>
            <Pressable
              style={styles.buttonItem}
              onPress={() => {
                setSpecialOffertModalVisible(true),
                  setProductName(item.name),
                  deleteProductFromProducts(item.id);
              }}
            >
              <Ionicons
                name='swap-horizontal-outline'
                size={24}
                color='black'
              />
            </Pressable>
            <Pressable
              style={styles.buttonItem}
              onPress={() => deleteProductFromProducts(item.id)}
            >
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
      <SpecialOffertsModal
        modalVisible={specialOffertModalVisible}
        setModalVisible={setSpecialOffertModalVisible}
        product={productName}
        setProduct={setProductName}
      />
    </View>
  );
};

export default ProductsList;
