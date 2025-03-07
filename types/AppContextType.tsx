import { Product } from './Product';
import { SpecialOffertProduct } from './SpecialOffertProduct';

export interface AppContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProductToProducts: (product: Product) => void;
  deleteProductFromProducts: (id: string) => void;
  specialOffertProducts: SpecialOffertProduct[];
  setSpecialOffertsProducts: React.Dispatch<
    React.SetStateAction<SpecialOffertProduct[]>
  >;
  addSpecialOffertProductToSpecialOffertProducts: (
    product: SpecialOffertProduct
  ) => void;
  removeSpecialOfferProduct: (id: string) => void;
}
