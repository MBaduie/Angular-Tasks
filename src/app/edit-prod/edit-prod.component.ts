import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'Models/ClassesAndTypes';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.css']
})
export class EditProdComponent {
  MyData : FormData
  MyForm! : FormGroup
  oldProduct : IProduct
  id : string = ""
  constructor(private prdSrv : ProductsService , private router:Router, private builder: FormBuilder, private activRoute :ActivatedRoute){
    this.MyData = new FormData()
    this.oldProduct = {price:0, quantity:0}
  }
  ngOnInit() {
    this.activRoute.params.subscribe({
      next:(prams)=>{
        this.id = prams["id"]
        this.prdSrv.getByID(prams["id"]).subscribe({
          next:(res)=>{
            this.oldProduct = res.data as IProduct;
            this.buildForm()
          }
        })
      }
    })
  }

  get listColors() {
    return this.MyForm.controls["colors"] as FormArray
  }

  add() {
    this.listColors.push(new FormControl('#000000'))
  }
  remove(index: number) {
    this.listColors.removeAt(index)
  }

  upload(data:any){
    this.MyData.append('imgURL',data[0])
  }

  buildForm(){
    ////to appand Coloer ayyay
    // console.log(this.oldProduct);
    let list = this.builder.array([])
    this.oldProduct.colors = String(this.oldProduct.colors![0]).split(",")
    for (const item of this.oldProduct.colors!) {
      list.push(new FormControl(item))
    }
    this.MyForm = this.builder.group({
      name: [this.oldProduct.name, [Validators.required]],
      description: [this.oldProduct.description, [Validators.required]],
      quantity: [this.oldProduct.quantity, [Validators.required]],
      price: [this.oldProduct.price, [Validators.required]],
      imgURL: [this.oldProduct.imgURL, [Validators.required]],
      colors: list ,
      // categoryID: [this.oldProduct.categoryID],
    })
  }


  send() {
    console.log(this.MyForm.value)
    // console.log(this.id)
    for (const key in this.MyForm.controls) {
      this.MyData.append(key,this.MyForm.controls[key].value)
    }
    if (this.id) {
      this.MyData.append('id',this.id)
      this.prdSrv.edit(this.MyData , this.id).subscribe((data:any) => {
        if (data.status == 200) {
          this.router.navigateByUrl('/product')
          }
          else {
            alert(data.message)
            }
    // this.prdSrv.edit(this.MyData,this.id).subscribe({
    //   next:(res)=>{
    //     if(res.success){
    //       //goo to home
    //       this.router.navigateByUrl("/products")

    //     }
    //     else{
    //       alert(res.message)
    //     }
    //   }
    // })

  }

      )}
}}
