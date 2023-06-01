import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  MyLoading: BehaviorSubject <boolean>
  constructor() {
    this.MyLoading = new BehaviorSubject <boolean>(false)
   }

   HideLoader(){
    this.MyLoading.next(false)
   }
   ShowLoader(){
    this.MyLoading.next(true)
   }
}
