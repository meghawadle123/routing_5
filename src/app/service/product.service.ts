import { Injectable } from '@angular/core';
import { IProduct, IResProd } from '../modules/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productArr:Array<IProduct> = [
  {
    id: "P101",
    pname: "Essence Mascara",
    pstatus: "Available",
    canReturn: 1,
    price: 499,
    category: "Makeup",
    imageUrl: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  {
    id: "P102",
    pname: "Eyeshadow Palette",
    pstatus: "Available",
    canReturn: 1,
    price: 899,
    category: "Makeup",
    imageUrl: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
  },
  {
    id: "P103",
    pname: "Red Lipstick",
    pstatus: "Out of Stock",
    canReturn: 0,
    price: 399,
    category: "Makeup",
    imageUrl: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
  },
  {
    id: "P104",
    pname: "Red Nail Polish",
    pstatus: "Available",
    canReturn: 1,
    price: 249,
    category: "Nail Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
  },
  {
    id: "P105",
    pname: "Calvin Klein Perfume",
    pstatus: "Available",
    canReturn: 0,
    price: 2499,
    category: "Fragrance",
    imageUrl: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
  },
  {
    id: "P106",
    pname: "Dior Perfume",
    pstatus: "Available",
    canReturn: 0,
    price: 4999,
    category: "Fragrance",
    imageUrl: "https://cdn.dummyjson.com/product-images/fragrances/dior-jadore/1.webp"
  },
  {
    id: "P107",
    pname: "Gucci Bloom Perfume",
    pstatus: "Out of Stock",
    canReturn: 0,
    price: 5999,
    category: "Fragrance",
    imageUrl: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp"
  },
  {
    id: "P108",
    pname: "Face Wash",
    pstatus: "Available",
    canReturn: 1,
    price: 349,
    category: "Skin Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
  }
];
  constructor() { }

  fetchAllproduct():Observable<Array<IProduct>>{
    return of(this.productArr)
  }

  fetchproductById(id:string):Observable<IProduct>{
    let productObj=this.productArr.find(t=>t.id===id)!;
    return of(productObj);
  }

  CreateProduct(product:IProduct):Observable<IResProd>{
     this.productArr.push(product);
     return of({
      msg:`The product with id ${product.id} is Added succesfully`,
      data:product
     })
  }

  removeProduct(id:string):Observable<IResProd>{
    let getindex=this.productArr.findIndex(t=>t.id===id);
    let removeItem=this.productArr.splice(getindex,1);
    return of({
      msg:`The product with id ${id} is remoevd Succesfully`,
      data:removeItem[0]
    })
  }

  OnupdateProduct(product:IProduct):Observable<IResProd>{
    let getindex=this.productArr.findIndex(t=>t.id===product.id);
    this.productArr[getindex]=product;
    return of({
      msg:`The product with id ${product.id} is Updated Succesfully`,
      data:product
    })
  }
}
