import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  form : FormGroup;

  info : FormData;
  constructor (private route : Router ,private builder : FormBuilder, private prdSrv : ProductsService)
  {
    this.info = new FormData()
    this.form = this.builder.group({
      name: ['test', ],
      description: ['test', ],
      quantity: ['1', ],
      price: ['1', ],
      /// error => colors: [this.builder.array([['']])], control=>array=>[control,control,...]
      colors: this.builder.array([['#000000'],]),
      categoryName: ['1',],
      categoryID: ['1',],
      imgURL:['',]
    })
  }

  get ItemsColor() {
    return this.form.controls["colors"] as FormArray
  }
  add() {
    this.ItemsColor.push(new FormControl('#000000'))
  }
  remove(index: number) {
    this.ItemsColor.removeAt(index)
  }
  upload(data:any){
    this.info.append('imgURL',data[0])
  }
  // ///////////////

  send() {
    for (const key in this.form.controls) {
      this.info.append(key,this.form.controls[key].value)
    }
    // this.show()
    // console.log(this.info);
    this.prdSrv.add(this.info).subscribe({
      next:(res)=>{
        if(res.success){
          //goo to home
        this.route.navigateByUrl("/products")

        }
        else{
          alert(res.message)
        }
      }
    })

  }


}

