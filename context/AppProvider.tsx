import React from 'react';
import { Product } from '@/types/Product';
import { AppContextType } from '@/types/AppContextType';
// Define the context type

// Provide a default value
export const AppContext = React.createContext<AppContextType>({
  products: [],
  setProducts: () => {},
  addProductToProducts: () => {},
  deleteProductFromProducts: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const addProductToProducts = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  const deleteProductFromProducts = (id: string) => {
    setProducts((prevState) =>
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
