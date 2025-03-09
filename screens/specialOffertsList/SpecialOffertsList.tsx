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
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderColor: 'black',
          marginBottom: 30,
        }}
      >
        <Text style={{ textAlign: 'center', flex: 1 }}>#</Text>
        <Text style={{ textAlign: 'center', flex: 1 }}>Product</Text>
        <Text style={{ textAlign: 'center', flex: 1 }}>Price</Text>
        <Text style={{ textAlign: 'center', flex: 1 }}>Shop</Text>
        <Text style={{ textAlign: 'center', flex: 1 }}>Date</Text>
        <Text style={{ textAlign: 'center', flex: 1 }}>#</Text>
      </View>
      <FlatList
        data={specialOffertProducts}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ flex: 1, textAlign: 'center' }}>{index + 1}.</Text>
            <Text style={{ textAlign: 'center', flex: 1 }}>{item.name}</Text>
            <Text style={{ textAlign: 'center', flex: 1 }}>{item.price}</Text>
            <Text
              style={{
                textAlign: 'center',
                flex: 1,
              }}
            >
              {item.shop}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                flex: 1,
              }}
            >
              {item.avaibleFrom}
            </Text>
            <Pressable
              onPress={() => removeSpecialOfferProduct(item.id)}
              style={{ flex: 1, alignItems: 'center' }}
            >
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
