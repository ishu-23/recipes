import { Component, ErrorHandler } from '@angular/core';
import { NgForm } from '@angular/forms';
import { autoResponseData, autoService } from './auth.service';
import { Observable, Subject, tap } from 'rxjs';
import { user } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = false;
  isLoading =  false;
  error : string = null;
  user = new Subject<user>();

  constructor(private authservice :autoService){}
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm :NgForm){

    const email = authForm.value.username;
    const password = authForm.value.password;
    this.isLoading = true
    if(!authForm.valid)
      return
    let authObservable : Observable<autoResponseData>
    if(!this.isLoginMode){
      authObservable = this.authservice.signUp(email,password);
    }
    else{
      authObservable = this.authservice.signIn(email,password);
    }
    authObservable.subscribe({
      next : (resData) => {
        console.log(resData);
        this.isLoading = false;
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn *1000);
        const User = new user(resData.email,resData.localId,resData.idToken,expirationDate);
        this.user.next(User);

      },
      error : (errorRes)=> {
        console.log(errorRes.error.error.message);
        this.error = "An error occured"
        if(errorRes.error || errorRes.error.error){
          switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
              this.error ="email already exits"
              break
            case 'EMAIL_NOT_FOUND':
              this.error='email not found'
              break
            case 'INVALID_LOGIN_CREDENTIALS':
              this.error='invalid login'
          }
        }
        this.isLoading = false;
      }
    })
    authForm.reset();
  }
}
