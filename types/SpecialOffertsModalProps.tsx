export interface SpecialOffertsModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  product: string;
  setProduct: React.Dispatch<React.SetStateAction<string>>;
}
