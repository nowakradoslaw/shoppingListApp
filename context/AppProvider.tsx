import { createContext, useEffect, useState } from 'react';
import { ProductSpecialOffert, Product } from '@/types/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsSpecialOffer, setProductsSpecialOffer] = useState<
    ProductSpecialOffert[]
  >([]);
  const [products, setProducts] = useState<Product[]>([]);

  const storeData = async (newProducts: ProductSpecialOffert[]) => {
    try {
      await AsyncStorage.setItem(
        'productsSpecialOffer',
        JSON.stringify(newProducts)
      );
    } catch (e) {
      console.error('Error saving productsSpecialOffer to AsyncStorage:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('productsSpecialOffer');
      if (jsonValue != null) {
        setProductsSpecialOffer(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Error loading productsSpecialOffer from AsyncStorage:', e);
    }
  };

  const addProductSpecialOffert = (newProduct: ProductSpecialOffert) => {
    const updatedProductsSpecialOffer = [...productsSpecialOffer, newProduct];
    setProductsSpecialOffer(updatedProductsSpecialOffer);
    storeData(updatedProductsSpecialOffer);
  };

  const deleteProductSpecialOffert = (index: number) => {
    const updatedProductsSpecialOffer = productsSpecialOffer.filter(
      (_, i) => i !== index
    );
    setProductsSpecialOffer(updatedProductsSpecialOffer);
    storeData(updatedProductsSpecialOffer);
  };
  const addProduct = (newPoduct: Product) => {
    const updatedProducts = [...products, newPoduct];
    setProducts(updatedProducts);
  };
  const deleteProduct = (index: number) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        addProductSpecialOffert,
        deleteProductSpecialOffert,
        products,
        productsSpecialOffer,
        setProducts,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
