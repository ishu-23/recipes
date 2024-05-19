import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface autoResponseData {
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered? : boolean;
}

@Injectable({providedIn:"root"})
export class autoService{
    
    constructor(private http: HttpClient){}
    signUp(email:string,password:string){
        return this.http.post<autoResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAh05ujvtwtpR28A9CsqfT60zWZTORcy-Q",{
            email :email,
            password : password,
            returnSecureToken : true
        }
        )}
    signIn(email:string,password:string){
        return this.http.post<autoResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAh05ujvtwtpR28A9CsqfT60zWZTORcy-Q",{
            email:email,
            password:password,
            returnSecureToken :true
        })
    }
}