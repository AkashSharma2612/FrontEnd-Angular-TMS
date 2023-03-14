import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: any = {};
  loginForm:FormGroup;
  PasswordValidatePattern = "^[A-zA@123]{7,15}";
  constructor(private loginService: LoginService, private router: Router) { 
   this.loginUserData={
      UserName:"",
      Password:"",
    }
    this.loginForm=new FormGroup({
      'UserName': new FormControl(this.loginUserData.UserName, [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z_]/)]),
      'Password': new FormControl(this.loginUserData.Password, [Validators.required, Validators.pattern(this.PasswordValidatePattern)]),
    })
  }
  ngOnInit(): void {
  }
    loginClick() {debugger
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      this.loginForm.get('UserName')?.markAsTouched();
      this.loginForm.get('Password')?.markAsTouched();
     return;
    }
    this.loginUserData.UserName= this.loginForm.get('UserName')?.value;
    this.loginUserData.Password= this.loginForm.get('Password')?.value;
    this.loginService.checkuser(this.loginUserData).subscribe(
      (response) => {
        if (response) {
          this.router.navigateByUrl("/home");
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

