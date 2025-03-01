// src/screens/NewProduct.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './NewProduct.style';
import { formatDate } from '@/utils/new-product-utilis/new-product-utilis';
import { Product } from '@/types/Product';
import { AppContext } from '@/context/AppProvider';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

const NewProduct = () => {
  const [price, setPrice] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [avilibleFrom, setAvilibleFrom] = useState<Date>(new Date());
  const [shopName, setShopName] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const { addProduct, products } = useContext(AppContext);

  const convertDate = formatDate(avilibleFrom);

  const handlerButtonDatePicker = (
    event: any,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || avilibleFrom;
    setOpen(false);
    setAvilibleFrom(currentDate);
  };
  const addProductToList = () => {
    const newProduct: Product = {
      id: uuidv4(),
      name: productName,
      price,
      shopName,
      avilibleFrom: formatDate(avilibleFrom),
    };
    addProduct(newProduct);
    setPrice('');
    setProductName('');
    setShopName('');
  };

  return (
    <View style={{ margin: 30 }}>
      <Text style={{ textAlign: 'center' }}>Add new product to list</Text>
      <View style={styles.containerInput}>
        <Text>Product name:</Text>
        <TextInput
          onChangeText={setProductName}
          value={productName}
          placeholder='Input product name'
        />
      </View>
      <View style={styles.containerInput}>
        <Text>Price:</Text>
        <TextInput
          onChangeText={setPrice}
          value={price}
          placeholder='Input price'
          keyboardType='numeric'
        />
      </View>
      <View style={styles.containerInput}>
        <Text>Shop name:</Text>
        <TextInput
          onChangeText={setShopName}
          value={shopName}
          placeholder='Shop name'
        />
      </View>
      <View style={styles.containerInput}>
        <Text>Available from:</Text>
        <Text>{convertDate}</Text>
        <Button title='Set Date' onPress={() => setOpen(true)} />
        {open && (
          <DateTimePicker
            value={avilibleFrom}
            mode='date'
            is24Hour={true}
            onChange={handlerButtonDatePicker}
          />
        )}
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title='Add Product' onPress={addProductToList} />
      </View>
    </View>
  );
};

export default NewProduct;
