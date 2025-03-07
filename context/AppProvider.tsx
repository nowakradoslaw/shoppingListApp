import React from 'react';
import { Product } from '@/types/Product';
import { SpecialOffertProduct } from '@/types/SpecialOffertProduct';
import { AppContextType } from '@/types/AppContextType';

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
