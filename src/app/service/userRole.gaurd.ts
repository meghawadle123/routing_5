import { inject, Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserRoleGaurd implements CanActivate{
        private _authService=inject(AuthService);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
         let AuthUSerRole=this._authService.getUserRole();
         let UserRoleArray=route.data['userRole'];
         return UserRoleArray.includes(AuthUSerRole);
    }



}