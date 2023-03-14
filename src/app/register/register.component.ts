import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/Service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterUserData: any = {};
  RegisterFormData: FormGroup;
  PasswordValidatePattern = "^[A-zA@123]{8,15}";
  DisplaySuccess: boolean = false;
  DisplayName: string = "danger";
  DisplayMessage: string = "";
  DisplayRole = ["Employee_User"];
  constructor(private registerService: RegisterService, private router: Router) {
    this.RegisterUserData = {
      UserName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      Role: "Select your Role"
    };
    this.RegisterFormData = new FormGroup({
      'UserName': new FormControl(this.RegisterUserData.UserName, [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z_]/)]),
      'Email': new FormControl(this.RegisterUserData.Email, [Validators.required, Validators.pattern(/^[A-zA@123]/)]),
      'Password': new FormControl(this.RegisterUserData.Password, [Validators.required, Validators.pattern(this.PasswordValidatePattern)]),
      'ConfirmPassword': new FormControl(this.RegisterUserData.ConfirmPassword, [Validators.required]),
      'Role': new FormControl(this.RegisterUserData.Role, [Validators.required])
    }, passwordMatchValidator);

    //abstractcontrol it will provide all the control value and also child control value.
    function passwordMatchValidator(control: AbstractControl) {
      return control.get('Password')?.value === control.get('ConfirmPassword')?.value ? null : { 'mismatch': true };
    }

  }

  SelectRoleChange(event: any) {
    this.RegisterFormData.setValue({
      UserName: this.RegisterFormData.get('UserName')?.value,
      Email: this.RegisterUserData.Email = this.RegisterFormData.get('Email')?.value,
      Password: this.RegisterFormData.get('Password')?.value, ConfirmPassword: this.RegisterFormData.get('ConfirmPassword')?.value,
      Role: event.target.value
    })
  }

  // this is a regiter click method 
  RegisterClick() {
    debugger
    console.log(this.RegisterFormData.invalid);
    if (this.RegisterFormData.invalid) {
      this.RegisterFormData.get('UserName')?.markAsTouched();
      this.RegisterFormData.get('Email')?.markAsTouched();
      this.RegisterFormData.get('Password')?.markAsTouched();
      this.RegisterFormData.get('ConfirmPassword')?.markAsTouched();
      this.RegisterFormData.get('Role')?.markAsTouched();
      return;
    }
    this.RegisterUserData.UserName = this.RegisterFormData.get('UserName')?.value;
    this.RegisterUserData.Email = this.RegisterFormData.get('Email')?.value;
    this.RegisterUserData.Password = this.RegisterFormData.get('Password')?.value;
    this.RegisterUserData.ConfirmPassword = this.RegisterFormData.get('ConfirmPassword')?.value;
    this.RegisterUserData.Role = this.RegisterFormData.get('Role')?.value;

    // here we will call the register api .......
    this.registerService.RegisterUser(this.RegisterUserData).subscribe({
      next: () => {
        this.DisplaySuccess = true;
        this.DisplayName = "success";
        console.log(this.RegisterUserData)
      },
      error: (err) => {
        debugger
        if (err.status == 500) {
          this.DisplaySuccess = true;
          setTimeout(() => {
            this.DisplaySuccess = false;
            this.DisplayName = "danger";
          }, 3000);
        }

      },
      complete: () => {
        this.RegisterFormData.reset("");
        setTimeout(() => {
          this.DisplaySuccess = false;
          this.DisplayName = "danger";
          this.router.navigate(['/login']);
        }, 2000);
      }
    })

  }
  ClearRec() {
  }
}

