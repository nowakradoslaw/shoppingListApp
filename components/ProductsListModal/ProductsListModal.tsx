import React from 'react';
import uuid from 'react-native-uuid';
import { Modal, View, Text, Pressable } from 'react-native';
import { ProductsListModalProps } from '@/types/ProductListModalProps';
import { TextInput } from 'react-native-gesture-handler';
import { AppContext } from '@/context/AppProvider';
import { Product } from '@/types/Product';
import { styles } from '@/components/ProductsListModal/ProductsListModal.style';

const ProductsListModal: React.FC<ProductsListModalProps> = ({
  visibleModal,
  setVisibleModal,
}) => {
  const { addProductToProducts } = React.useContext(AppContext);
  const [productName, setProductName] = React.useState<string>('');

  return (
    <Modal visible={visibleModal} transparent={true}>
      <View style={styles.containerModal}>
        <View style={styles.container}>
          <Text style={styles.title}>Add product to shopping list</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputName}>Product name:</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={setProductName}
                value={productName}
              />
            </View>
            <Pressable
              style={styles.addProductButton}
              onPress={() => {
                const newProduct: Product = {
                  id: uuid.v4(),
                  name: productName,
                };
                addProductToProducts(newProduct);
                setProductName('');
              }}
            >
              <Text style={styles.buttonText}>Add Product</Text>
            </Pressable>
          </View>
          <Pressable
            style={{ ...styles.closebutton, backgroundColor: 'red' }}
            onPress={() => setVisibleModal(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ProductsListModal;
