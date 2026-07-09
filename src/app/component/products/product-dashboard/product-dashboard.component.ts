import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modules/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
ProductArr!:Array<IProduct>

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this.fetchAllproduct();
  }

  fetchAllproduct(){
    this._productService.fetchAllproduct().subscribe({
      next:data=>{
           this.ProductArr=data
      }
    })
  }
}
