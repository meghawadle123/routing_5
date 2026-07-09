import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/modules/product';
import { ProductService } from 'src/app/service/product.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  productDetails!:IProduct;
  productId!:string;
  constructor(private _routes:ActivatedRoute,
    private _productService:ProductService,
    private _matDialog:MatDialog,
    private _snackbar:SnackbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.fetchproduct()
  }

  fetchproduct(){
      this._routes.params.subscribe({
        next:data=>{
          this.productId=data['id'];
          if(this.productId){
            this._productService.fetchproductById(this.productId).subscribe({
              next:data=>{
                this.productDetails=data;
              }
            })
          }
        }
      })
  }

  onRemove(){
    let config=new MatDialogConfig();
    config.width='450px';
    config.disableClose=true;
    config.data=`Are You sure ?You want to remove it`
   let getConfirm= this._matDialog.open(GetconfirmComponent,config);
   getConfirm.afterClosed().subscribe(val=>{
    if(val){
      this._productService.removeProduct(this.productId).subscribe({
        next:data=>{
           this._snackbar.openSnackbar(data.msg);
           this._router.navigate(['product'])
        }
      })
    }
   })
  }
}
