import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { IcanDecative } from "../modules/canDeactive";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class canDeactiveGaurd implements CanDeactivate<IcanDecative>{
    canDeactivate(component: IcanDecative,
         currentRoute: ActivatedRouteSnapshot, 
         currentState: RouterStateSnapshot, 
         nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

            return component.canDeactive();
    }

}