import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from '../share/db';
import { User } from '../share/users';
import { apiResult } from '../share/Api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  orignaPath ="http://localhost:5000/"
  StoredUserSub:BehaviorSubject<StoredUser>
  constructor(private http : HttpClient) {
    this.StoredUserSub = new BehaviorSubject<StoredUser>(this.getUser())
  }

  getUser():StoredUser{
    let check = localStorage.getItem("storedUser")
    if(check == null)
      return {token:"",name:""}
    else
      return JSON.parse(check)  as StoredUser
  }
  
  setuser(token:string, name:string){
    let s= {token:token,name:name} as StoredUser;
    localStorage.setItem("storedUser",JSON.stringify(s))
    this.StoredUserSub.next(s)
  }
  register(data : User)
  {
  return this.http.post<apiResult>(this.orignaPath +"user/register", data)
  }
  login(data : User)
  {
    return this.http.post<apiResult>(this.orignaPath + "user/login" , data)
  }
}


export interface StoredUser{
  name:string;
  token:string;
  }
