import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { SpecialOffertsModalProps } from '@/types/SpecialOffertsModalProps';
import { styles } from '@/components/specialOffertsModal/SpecialOffertsModal.style';
import { TextInput } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import { SpecialOffertProduct } from '@/types/SpecialOffertProduct';
import { AppContext } from '@/context/AppProvider';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';

const SpecialOffertsModal: React.FC<SpecialOffertsModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const { addSpecialOffertProductToSpecialOffertProducts } =
    React.useContext(AppContext);
  const [productName, setProductName] = React.useState<string>('');
  const [productPrice, setProductPrice] = React.useState<string>('');
  const [shopName, setShopName] = React.useState<string>('');
  const [avaibleFrom, setAvaibleFrom] = React.useState<string>('');
  const [dataPickerIsOpne, setDataPickerIsOpen] =
    React.useState<boolean>(false);
  return (
    <Modal visible={modalVisible}>
      <View style={styles.containerModal}>
        <View style={styles.container}>
          <Text style={styles.title}>Special Offers</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputName}>Product: </Text>
              <TextInput
                value={productName}
                style={styles.inputText}
                onChangeText={(text) => setProductName(text)}
              />
            </View>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputName}>Price: </Text>
              <TextInput
                value={productPrice}
                keyboardType='numeric'
                style={styles.inputText}
                onChangeText={(text) => setProductPrice(text)}
              />
            </View>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputName}>Shop: </Text>
              <TextInput
                value={shopName}
                style={styles.inputText}
                onChangeText={(text) => setShopName(text)}
              />
            </View>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputName}>Avaible from: </Text>
              <Text>{avaibleFrom}</Text>
              <Pressable onPress={() => setDataPickerIsOpen(true)}>
                <Ionicons name='calendar-outline' size={32} color='black' />
              </Pressable>
              {dataPickerIsOpne && (
                <DateTimePicker
                  mode='date'
                  display='calendar'
                  value={new Date()}
                  onChange={(event, selectedDate) => {
                    if (selectedDate) {
                      setDataPickerIsOpen(false);
                      setAvaibleFrom(selectedDate.toLocaleDateString());
                    }
                  }}
                />
              )}
            </View>
          </View>
          <Pressable
            style={styles.addProductButton}
            onPress={() => {
              const newProduct: SpecialOffertProduct = {
                id: uuid.v4(),
                name: productName,
                price: productPrice,
                shop: shopName,
                avaibleFrom: avaibleFrom,
              };
              addSpecialOffertProductToSpecialOffertProducts(newProduct);
              setProductName('');
              setProductPrice('');
              setAvaibleFrom('');
              setShopName('');
            }}
          >
            <Text style={styles.buttonText}>Add Product</Text>
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default SpecialOffertsModal;
