import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExOne';

  MyLoading : BehaviorSubject<boolean>

  constructor(private LoadSrv : LoaderService){
    this.MyLoading = this.LoadSrv.MyLoading
  }
// MyLoading: Observable<unknown>|Subscribable<unknown>|Promise<unknown>;


}
