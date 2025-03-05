import { Product } from './Product';

export interface AppContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProductToProducts: (product: Product) => void;
  deleteProductFromProducts: (id: string) => void;
}
