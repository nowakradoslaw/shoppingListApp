import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './NewProduct.style';
import { Product } from '@/types/Product';
import { formatDate } from '@/utils/new-product-utilis/new-product-utilis';

const NewProduct = () => {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [price, setPrice] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [avilibleFrom, setAvilibleFrom] = useState<Date>(new Date());
  const [shopName, setShopName] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const convertDate = formatDate(avilibleFrom);
  const handlerButtonDatePicker = (
    event: any,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || avilibleFrom; // Default to current value if selectedDate is undefined
    setOpen(false);
    setAvilibleFrom(currentDate);
  };
  const addProductToList = () => {
    setListProduct((prevList) => [
      ...prevList,
      {
        name: productName,
        price: price,
        avilibleFrom: avilibleFrom,
      },
    ]);
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
          placeholder='shop name'
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
