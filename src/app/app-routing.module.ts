import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeDashboardComponent } from "./component/home/home-dashboard/home-dashboard.component";
import { ProductDashboardComponent } from "./component/products/product-dashboard/product-dashboard.component";
import { ProductFormComponent } from "./component/products/product-form/product-form.component";
import { ProductSingleComponent } from "./component/products/product-single/product-single.component";
import { UserDashboardComponent } from "./component/users/user-dashboard/user-dashboard.component";
import { UserFormComponent } from "./component/users/user-form/user-form.component";
import { UserSingleComponent } from "./component/users/user-single/user-single.component";
import { FairsComponent } from "./component/fairs/fairs/fairs.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found/page-not-found.component";

const routes:Routes=[
    {
    path:'',
    redirectTo:'home',
    pathMatch:"full"
},
{
    path:'home',
    component:HomeDashboardComponent
},
{
    path:'product',
    component:ProductDashboardComponent,
    children:[
        {
            path:'AddProduct',
            component:ProductFormComponent
        },
         {
            path:':id',
            component:ProductSingleComponent
        },

         {
            path:':id/edit',
            component:ProductFormComponent
        },
        
    ]

},
{
    path:'user',
    component:UserDashboardComponent,
    children:[
        {
            path:'Adduser',
            component:UserFormComponent
        },
         {
            path:':userId',
            component:UserSingleComponent
        },

         {
            path:':userId/edit',
            component:UserFormComponent
        },
        
    ]
},
{
    path:'fairs',
    component:FairsComponent
},
{
    path:'**',
    component:PageNotFoundComponent
}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting{

}