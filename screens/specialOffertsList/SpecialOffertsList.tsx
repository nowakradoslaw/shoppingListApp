import React from 'react';
import { Text, View } from 'react-native';
import { AppContext } from '@/context/AppProvider';
import { FlatList, Pressable } from 'react-native-gesture-handler';
import SpecialOffertsModal from '@/components/specialOffertsModal/SpecialOffertsModal';
import { styles } from '@/screens/specialOffertsList/SpecialOffertsList.style';
import Ionicons from '@expo/vector-icons/Ionicons';

const SpecialOfferts = () => {
  const { specialOffertProducts, removeSpecialOfferProduct } =
    React.useContext(AppContext);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 25, margin: 20 }}>
        Promocje
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          borderBottomWidth: 1,
          borderColor: 'black',
          marginBottom: 30,
        }}
      >
        <Text style={{ flex: 1, textAlign: 'center' }}>#</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>Product</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>Price</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>Shop</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>Date</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>#</Text>
      </View>
      <FlatList
        data={specialOffertProducts}
        renderItem={({ item, index }) => (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={{ textAlign: 'center' }}>{index + 1}. </Text>
            <Text style={{ textAlign: 'center' }}>{item.name}</Text>
            <Text style={{ textAlign: 'center' }}>{item.price}</Text>
            <Text style={{ textAlign: 'center' }}>{item.shop}</Text>
            <Text style={{ textAlign: 'center' }}>{item.avaibleFrom}</Text>
            <Pressable onPress={() => removeSpecialOfferProduct(item.id)}>
              <Ionicons name='trash-outline' color={'red'} size={20} />
            </Pressable>
          </View>
        )}
      />
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <SpecialOffertsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default SpecialOfferts;
