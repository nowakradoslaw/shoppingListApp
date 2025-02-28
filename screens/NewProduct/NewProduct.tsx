import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './NewProduct.style';

interface Product {
  name: string;
  price: string;
  avilibleFrom: Date;
}

const NewProduct = () => {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [price, setPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [avilibleFrom, setAvilibleFrom] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || avilibleFrom; // Default to current value if selectedDate is undefined
    setOpen(false);
    setAvilibleFrom(currentDate);
  };
  const date = () => {
    const year = avilibleFrom.getFullYear();
    const month = avilibleFrom.getMonth() + 1; // Adding 1 to get the correct month (1 to 12)
    const day = avilibleFrom.getDate();
    return `${day}-${month}-${year}`; // Return the formatted date string
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
        <Text>Available from:</Text>
        <Text>{date()}</Text> {/* Display formatted date */}
        <Button title='Set Date' onPress={() => setOpen(true)} />
        {open && (
          <DateTimePicker
            value={avilibleFrom}
            mode='date'
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      <Button title='Add Product' onPress={addProductToList} />
    </View>
  );
};

export default NewProduct;
