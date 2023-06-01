import { Component } from '@angular/core';
// import { Data } from '../share/db';
// import {Data} form "/src/app/share/db"
import { IProduct } from 'Models/ClassesAndTypes';
import {ProductsService} from '../Services/products.service'
import {CartService} from '../Services/cart.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent{
  products:IProduct[] ///

  // conut = 0
constructor(public PrdSrv : ProductsService ,private CartSrv : CartService , private router:Router)
{
  this.products =[]
  this.PrdSrv.display().subscribe({
    next:(res)=>
    {
      let temp = res.data as IProduct[]
      this.products = temp
      console.log(this.products);
    }
  });
}

Add(prdc : IProduct)
{
  this.CartSrv.ShowAdd(prdc)
  this.CartSrv.AddTo(prdc)
  // this.CartSrv.
}
update(data : number)
{

}

del(id : string)
{
  console.log(id)
  this.PrdSrv.delete(id).subscribe({
    next:(res)=>{
      this.router.navigateByUrl("/products")
      location.reload()}
})
}



}

