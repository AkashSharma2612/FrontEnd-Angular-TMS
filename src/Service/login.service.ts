import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable ,map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   
  loginUserDetail={
    UserName:"",
    Password:"",
  }
  currentusername:any="";
  token=sessionStorage.getItem('currentUser');
  constructor(private httpClient:HttpClient,private router:Router,private jwtHelperService:JwtHelperService) { }
  checkuser(loginUserDetail:any):Observable<any>{debugger
    
  return this.httpClient.post<any>("https://localhost:7130/api/Account/authenticate",loginUserDetail).
  pipe(map(u=>{
if(u)
{
  this.currentusername=u.username;
  sessionStorage['currentUser']=JSON.stringify(u);
}
return u;
    }))
  }
  logout(){
    this.currentusername="";
    sessionStorage.removeItem('currentUser');
    this.router.navigateByUrl("/login");
  }
  public isAuthenticate():boolean{
    if(this.jwtHelperService.isTokenExpired()){
      return false;
    }
    else
    {
      return true;
    }
  }
}
