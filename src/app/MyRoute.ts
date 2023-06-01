import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductsComponent } from "./add-products/add-products.component";
import { CartsComponent } from "./carts/carts.component";
import { EditProdComponent } from "./edit-prod/edit-prod.component";
// import { EditProdComponent } from "./edit-prod/edit-prod.component";
import { LoginComponent } from "./login/login.component";
import { ProductsComponent } from "./products/products.component";
import { RegisterComponent } from "./register/register.component";

let route :Routes=[
    {path:"products",component: ProductsComponent},
    {path:"cart",component:CartsComponent},
    {path:"reg",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"add-prod",component:AddProductsComponent},
    {path:"edit-product/:id",component:EditProdComponent}
    // {path:"login",component:LoginComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class MyRoute{}
