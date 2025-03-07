import React from 'react';
import { Product } from '@/types/Product';
import { SpecialOffertProduct } from '@/types/SpecialOffertProduct';
import { AppContextType } from '@/types/AppContextType';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = React.createContext<AppContextType>({
  products: [],
  setProducts: () => {},
  addProductToProducts: () => {},
  deleteProductFromProducts: () => {},
  specialOffertProducts: [],
  setSpecialOffertsProducts: () => {},
  addSpecialOffertProductToSpecialOffertProducts: () => {},
  removeSpecialOfferProduct: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [specialOffertProducts, setSpecialOffertsProducts] = React.useState<
    SpecialOffertProduct[]
  >([]);

  const saveToStorage = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  const loadFromStorage = async (key: string, setter: (data: any) => void) => {
    try {
      const storedData = await AsyncStorage.getItem(key);
      if (storedData) {
        setter(JSON.parse(storedData));
      }
    } catch (e) {
      console.error(e);
    }
  };
  React.useEffect(() => {
    loadFromStorage('products', setProducts);
    loadFromStorage('specialOffertProducts', setSpecialOffertsProducts);
  }, [setProducts, setSpecialOffertsProducts]);
  React.useEffect(() => {
    saveToStorage('products', products);
  }, [products]);
  React.useEffect(() => {
    saveToStorage('specialOffertProducts', specialOffertProducts);
  }, [specialOffertProducts]);

  const addProductToProducts = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  const deleteProductFromProducts = (id: string) => {
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== id)
    );
  };
  const addSpecialOffertProductToSpecialOffertProducts = (
    newProduct: SpecialOffertProduct
  ) => {
    setSpecialOffertsProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  const removeSpecialOfferProduct = (id: string) => {
    setSpecialOffertsProducts((prevState) =>
      prevState.filter((product) => product.id !== id)
    );
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        addProductToProducts,
        deleteProductFromProducts,
        specialOffertProducts,
        setSpecialOffertsProducts,
        addSpecialOffertProductToSpecialOffertProducts,
        removeSpecialOfferProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
