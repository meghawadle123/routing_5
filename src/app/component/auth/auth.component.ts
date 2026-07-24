import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm!:FormGroup;
  signUpForm!:FormGroup;
  alreadyHasAccount:boolean=false;
  constructor(private _authService:AuthService,
    private _snackbar:SnackbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
     this.CreateLoginForm();
     this.CreateSignUpform();
  }

  CreateLoginForm(){
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    })
  }

  CreateSignUpform(){
    this.signUpForm=new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      userRole:new FormControl(null,[Validators.required])
    })
  }

  OnsignUp(){
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched()
    }else{
      let userDetails=this.signUpForm.value;
      this._authService.signUp(userDetails).subscribe({
        next:data=>{
          this._snackbar.openSnackbar(data.message);
        },
        error:err=>{
          this._snackbar.openSnackbar(err.message);
        }
      })
    }
  }

  onLogin(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }else{
      let UserDetails=this.loginForm.value;
       this._authService.login(UserDetails).subscribe({
        next:data=>{
          console.log(data);
          
          this._snackbar.openSnackbar(data.msg);
          this._authService.SaveToken(data.token);
          this._authService.saveUserRole(data.userRole);
          this._router.navigate(['home']);
        },error:err=>{
          this._snackbar.openSnackbar(err.msg);
        }
       })
    }
  }
}
