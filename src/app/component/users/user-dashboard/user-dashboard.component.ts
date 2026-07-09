import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/modules/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
userArr!:Array<IUser>;
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.fetchAllUser()
  }

  fetchAllUser(){
    this._userService.fetchAllUser().subscribe({
      next:data=>{
        this.userArr=data;
      }
    })
  }
}
