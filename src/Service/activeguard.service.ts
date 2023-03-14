import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from 'src/Service/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ActiveguardService implements CanActivate

{

  constructor(private loginService:LoginService,private router:Router,private jwthelperservice:JwtHelperService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  
  {
   var token=sessionStorage.getItem('currentUser')? JSON.parse(sessionStorage.getItem('currentUser')as string).token:null;
    if(this.loginService.isAuthenticate()){
      return true;
    }
    else{
      this.router.navigateByUrl("/login")
      return false;
    }
  }
}

