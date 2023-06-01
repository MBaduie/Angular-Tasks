import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  img = '../../assets/3.jpg'
  count = 0
  constructor(private CrtSrv : CartService) {
    this.CrtSrv.CartListSubject.subscribe((x)=>
  {
    this.count = x.length
  })
  }
}
