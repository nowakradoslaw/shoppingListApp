import React from 'react';
import {
  View,
  FlatList,
  Text,
  Button,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { AppContext } from '@/context/AppProvider';
import { TextInput } from 'react-native-gesture-handler';
import { Product } from '@/types/Product';

const ShoppingList = () => {
  const { products, addProduct } = React.useContext(AppContext);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [productName, setProductName] = React.useState<string>('');
  const addProductToList = () => {
    const newProduct: Product = {
      id: uuidv4(),
      name: productName,
    };
    addProduct(newProduct);
  };
  const newProduct = (
    <Modal
      animationType='slide'
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: 'black',
        }}
      >
        <View
          style={{
            backgroundColor: 'red',
          }}
        >
          <Text>Modal Content</Text>
          <View>
            <Text>Product name:</Text>
            <TextInput onChangeText={setProductName}></TextInput>
            <Button title='add product' onPress={addProductToList} />
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
      }}
    >
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text style={{ fontSize: 20 }}>{index + 1}. </Text>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
          </View>
        )}
      />
      <Pressable
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'blue',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'absolute',
          bottom: 40,
          right: 40,
        }}
        onPress={() => setModalVisible(true)}
      >
        <View>
          <Text style={{ fontSize: 50, color: 'white' }}>+</Text>
        </View>
      </Pressable>
      {newProduct}
    </View>
  );
};

export default ShoppingList;
