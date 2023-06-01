import { Component } from '@angular/core';
import { IProduct } from 'Models/ClassesAndTypes';
import {CartService} from '../Services/cart.service'
// import { cartItem } from "../Services/cart.service";
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent {

  constructor(private crtSer : CartService ){

  }

  cartItem = this.crtSer.getAll();

  del(x : number){
    this.cartItem.splice(x,1);

  }
  Pluss(tt:number)
  {
    this.crtSer.Plus(tt)
  }
  Minus(tt:number)
  {
    this.crtSer.minus(tt)
  }
}
