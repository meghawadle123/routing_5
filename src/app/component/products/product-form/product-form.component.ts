import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { IProduct } from 'src/app/modules/product';
import { ProductService } from 'src/app/service/product.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm!:FormGroup;
  productId!:string
  isInEditMode:boolean=false;
  constructor(private _productService:ProductService,
    private _matsnackber:SnackbarService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.createForm();
      this.Onedit();
      
  }

  createForm(){
    this.productForm=new FormGroup({
      pname:new FormControl(null,[Validators.required]),
      pstatus:new FormControl('Available',[Validators.required]),
      price:new FormControl(null,[Validators.required]),
      imageUrl:new FormControl(null,[Validators.required]),
      category:new FormControl(null,[Validators.required]),

    })
  }

  get f(){
    return this.productForm.controls;
  }

  onAddProduct(){
     let addObj:IProduct={
      ...this.productForm.getRawValue(),
      id:Date.now().toString()
     }
     this._productService.CreateProduct(addObj).subscribe({
      next:data=>{
        this._matsnackber.openSnackbar(data.msg);
        this.productForm.reset();
        this._router.navigate(['product'])
      }
     })
  }

  Onedit(){
    this.productId=this._routes.snapshot.paramMap.get('id')!;
    this._productService.fetchproductById(this.productId).subscribe({
      next:data=>{
        this.isInEditMode=true;
        this.productForm.patchValue(data);
      
      }

    })
  }

  Onupdate(){
    let UpdatedObj:IProduct={
      ...this.productForm.getRawValue(),
      id:this.productId
    }
    this._productService.OnupdateProduct(UpdatedObj).subscribe({
      next:data=>{
        this._matsnackber.openSnackbar(data.msg);
        this._router.navigate(['product']);
      }
    })
  }
}
