export interface IProduct {
  id: string;
  pname: string;
  pstatus: 'Available' | 'Out of Stock';
  canReturn: 0 | 1;
  price: number;
  category: string;
  imageUrl: string;
}

export interface IResProd {
  msg: string;
  data: IProduct;
}