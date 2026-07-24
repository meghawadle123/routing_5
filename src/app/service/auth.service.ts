import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IauthLogin, IauthSignUp } from "../modules/auth";


@Injectable({
    providedIn:'root'
})
export class AuthService{
   
constructor(private _http:HttpClient){}

BASE_URL=environment.AUTH_BASE_URL;

login(userDetails:IauthLogin):Observable<any>{
   return this._http.post(`${this.BASE_URL}/api/auth/login`,userDetails);
}

signUp(userDetails:IauthSignUp):Observable<any>{
    return this._http.post(`${this.BASE_URL}/api/auth/register`,userDetails);
}

logOut():Observable<any>{
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        return of({
            msg:'LogOut Succesfully'
    })
    }
 
SaveToken(token:string){
  return localStorage.setItem('token',token);
}   

saveUserRole(userRole:string){
   return localStorage.setItem('userRole',userRole);
}

getToken():string|null{
  return localStorage.getItem('token');
}

getUserRole():string|null{
    return localStorage.getItem('userRole');
}


}