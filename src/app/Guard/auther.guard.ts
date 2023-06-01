import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";





@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accSrv: AccountService, private router: Router) { }
  (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
  let user = this.accSrv.getuser()
  if (user.token == "" || user.token == undefined) {
    // console.log(route,state)
    alert("you need to sign in !!")
    // this.router.navigateByUrl('/login')
    this.router.navigate([
      '/login',
      state.url
    ])
    return false;
  }

  else
    return true;
}

}
