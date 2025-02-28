import { useContext } from 'react';
import { FlatList, Text, View, Pressable } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { AppContext } from '@/context/AppProvider';

const ShoppingList = () => {
  const { products, deleteProduct } = useContext(AppContext);

  return (
    <View style={{ margin: 20 }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ flex: 0.1, fontWeight: 'bold', textAlign: 'center' }}>
          #
        </Text>
        <Text style={{ flex: 3, fontWeight: 'bold', textAlign: 'center' }}>
          Product Name
        </Text>
        <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Price
        </Text>
        <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Shop Name
        </Text>
        <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Available From
        </Text>
        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>
          Actions
        </Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Text style={{ flex: 0.3, textAlign: 'center' }}>{index + 1}</Text>
            <Text style={{ flex: 3, textAlign: 'center' }}>{item.name}</Text>
            <Text style={{ flex: 2, textAlign: 'center' }}>{item.price}</Text>
            <Text style={{ flex: 2, textAlign: 'center' }}>
              {item.shopName}
            </Text>
            <Text style={{ flex: 2, textAlign: 'center' }}>
              {item.avilibleFrom}
            </Text>

            <View style={{ flex: 1 }}>
              <Pressable>
                <Ionicons name='trash-outline' color='#ff0000' size={20} />
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ShoppingList;
