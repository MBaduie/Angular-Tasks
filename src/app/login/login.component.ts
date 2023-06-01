import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { User } from '../share/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  MyLogin : FormGroup;

  constructor(private bld : FormBuilder , private UserSer : UsersService , private UserSrv: UsersService , private route:Router){
    this.MyLogin = bld.group({
      email:['',[Validators.required ,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:['',[Validators.required ,Validators.minLength(5)]]
    })
  }


  loginn(){
    this.UserSer.login(this.MyLogin.value as User)
    .subscribe({
      next:(res)=>{
        if(res.success)
        {
          console.log(res.message)
          this.UserSrv.setuser(res.data.token,res.data.user.name)
          this.route.navigateByUrl('/products')
          // alert("Done")
        }
        else
        {
          alert(res.message)
        }
      }
    })
  }
}
