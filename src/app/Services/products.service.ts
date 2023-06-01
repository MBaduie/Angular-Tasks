import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'Models/ClassesAndTypes';
import { apiResult } from '../share/Api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }
  // list: Array<IProduct>=[
  //   {
  //       id: 1,
  //       name: "Lenvo thinpad X230",
  //       price: 100000,
  //       quantity: 10,
  //       imgURL: "https://picsum.photos/200"
  //   },
  //   {
  //       id: 2,
  //       name: "Dell",
  //       price: 2002020,
  //       quantity: 20,
  //       imgURL: "https://picsum.photos/200"
  //   },
  //   {
  //       id: 3,
  //       name: "Lenovo Tab",
  //       price: 100888,
  //       quantity: 10,
  //       imgURL: "https://picsum.photos/200"
  //   },
  //   {
  //       id: 4,
  //       name: "Samsung Tab",
  //       price: 1000000,
  //       quantity: 10,
  //       imgURL: "https://picsum.photos/200"
  //   },
  //   {
  //       id: 5,
  //       name: "Samsung note 10",
  //       price: 100777,
  //       quantity: 10,
  //       imgURL: "https://picsum.photos/200"
  //   },
  //   {
  //       id: 6,
  //       name: "Samsung S10",
  //       price: 100,
  //       quantity: 10,
  //       imgURL: "https://picsum.photos/200"
  //   },
  //   {
  //       id: 7,
  //       name: "tochiba Utlra",
  //       price: 60000,
  //       quantity: 14,
  //       imgURL: "https://fakeimg.pl/200x100",
  //   },
  //   {
  //       id: 8,
  //       name: "Apple Utlra",
  //       price: 7800060,
  //       quantity: 6,
  //       imgURL: "https://fakeimg.pl/200x100",
  //   },
  //   {
  //       id: 9,
  //       name: "test Utlra",
  //       price: 7800060,
  //       quantity: 3,
  //       imgURL: "https://fakeimg.pl/200x100",
  //   },
  //   {
  //       id: 10,
  //       name: "jhgfjxz",
  //       imgURL: "https://picsum.photos/200",
  //       quantity: 33,
  //       price: 44444444,
  //   },
  //   {
  //       id: 11,
  //       name: "fsdjhfgsdjhkgfsh",
  //       price: 7800060,
  //       quantity: 3,
  //       imgURL: "https://fakeimg.pl/200x100",
  //   }
  // ]

  orignaPath ="http://localhost:5000/"
  add(data:FormData){
    return this.http.post<apiResult>(this.orignaPath+'product/add',data)
  }

  display()
  {
    return this.http.get<apiResult>(this.orignaPath+ 'product')
  }

  getByID(id :string){
    return this.http.get<apiResult>(this.orignaPath+"product/"+id);
  }

  edit(data:FormData,id:string){
    return this.http.put<apiResult>(this.orignaPath+'product/edit/'+id,data)
  }

  delete(id :string){
    return this.http.delete<apiResult>(this.orignaPath+"product/delete/"+id);
  }
}
