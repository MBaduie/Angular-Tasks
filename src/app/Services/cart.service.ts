import { Injectable } from '@angular/core';
import { IProduct } from 'Models/ClassesAndTypes';
import { find, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  CartListSubject: Subject<IProduct[]>;
  List: IProduct[]

  constructor() {
    this.List = []
    this.CartListSubject = new Subject<IProduct[]>
    this.CartListSubject.next(this.List)
  }

  ShowAdd(pr: IProduct) {
    this.List.push(pr);
    this.CartListSubject.next(this.List)
  }
  ////////

  private cart: cartItem[] = []
  getAll(): cartItem[] {
    return this.cart;
  }
  // constructor() { }


  Plus(hh: number) {
    this.cart[hh].q++;
  }

  minus(hh: number) {
    this.cart[hh].q--;
  }

  AddTo(prod: IProduct) {
    prod.quantity--;
    let flag = 0;
    this.cart.forEach((item, i) => {
      if (item.p._id == prod._id) {
        this.Plus(i)
        flag = 1
        return
      }
    })
    if (!flag) {
      console.log(this.cart);
      this.cart.push({ p: prod, q: 1 })
    }
  }
      // this.cart.push({ p: prod, q: 1 })



    // this.cart.find(function(item,i ){
    //   if(item.p.id == prod.id)
    //   {
    //     this.cart[i].p.quantity --;
    //     return true;

    //   }
    //   }
    // })


    //   addToCart(product:IProduct){
    //     let flag=0
    //     product.quantity --;
    //     this.cart.forEach((item,i)=>{
    //       if(item.product.id==product.id){
    //       this.plus(i)
    //       flag=1
    //      return
    //     }})

    //     if (!flag) {
    //     console.log(this.cart);
    //     this.cart.push({product:product,qty:1})
    //     }
    //   }
    //   this.cart.push({p: prod, q:1})
    // }


}

interface cartItem {
  p: IProduct;
  q: number;
}


