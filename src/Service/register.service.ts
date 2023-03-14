import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerUserDetail={
    UserName:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    Role:"",
   }
  constructor(private httpClient:HttpClient) { }
    
  RegisterUser(registerUserDetail:any):Observable<any>{
    debugger
    console.log(registerUserDetail);
          return this.httpClient.post<any>('https://localhost:7130/api/Account/Register',registerUserDetail);
  }
  getToken():any{
    return sessionStorage.getItem('currentUser');
  }

}
