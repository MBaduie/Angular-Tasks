import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { User } from '../share/users';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  MyForm : FormGroup; // B3ml Group Ll Form We Hshel Feha Al Info
  // router: any;
  constructor(private Builder : FormBuilder , private UserSer : UsersService , private route : Router ) {
    this.MyForm = Builder.group({
      name:['',[Validators.required , Validators.minLength(3)]],
      email:['',[Validators.required ]],
      phoneNumber:['',[Validators.required ,Validators.minLength(11),Validators.maxLength(15)]],
      password:['',[Validators.required ,Validators.minLength(5)]]
    })
  }

  save(){
    // console.log(this.MyForm.value);

    this.UserSer.register(this.MyForm.value as User)
    .subscribe({
      next:(res)=>{
        if(res.success)
        {
          // console.log(this.MyForm.value)
          this.route.navigateByUrl('/login')
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
