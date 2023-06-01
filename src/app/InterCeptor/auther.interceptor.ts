import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../Services/users.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accSrv: UsersService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("oooolllllldddd" ,request)
    let newRequset = request.clone({
      headers : request.headers.set("authorization",`bearer ${this.accSrv.getUser().token}`)
    })
    console.log("nnnnnewwww",newRequset)
    return next.handle(newRequset);
  }
}
