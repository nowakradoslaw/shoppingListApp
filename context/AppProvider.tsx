import { createContext, useEffect, useState } from 'react';
import { Product } from '@/types/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const storeData = async (newProducts: Product[]) => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(newProducts));
    } catch (e) {
      console.error('Error saving products to AsyncStorage:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('products');
      if (jsonValue != null) {
        setProducts(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Error loading products from AsyncStorage:', e);
    }
  };

  const addProduct = (newProduct: Product) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    storeData(updatedProducts);
  };

  const deleteProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    storeData(updatedProducts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
