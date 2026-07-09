import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/modules/user';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/service/user.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
userDetails!:IUser
userId!:string
  constructor(private _userService:UserService,
    private _routes:ActivatedRoute,
    private _router:Router,
    private _matdialog:MatDialog,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
     this.getUserObj()
  }

  getUserObj(){
    this._routes.params.subscribe({
       next:data=>{
        this.userId=data['userId'];
        if(this.userId){
          this._userService.fetchUserById(this.userId).subscribe({
            next:data=>{
              this.userDetails=data;
            }
          })
        }
       }
    })
  }

  Onremove(){
     let config=new MatDialogConfig();
     config.width='450px';
     config.disableClose=true;
     config.data=`Are you sure?you want to remove it`;
     let getconfirm=this._matdialog.open(GetconfirmComponent,config);
     getconfirm.afterClosed().subscribe(val=>{
      if(val){
        this._userService.onRemove(this.userId).subscribe({
          next:data=>{
            this._snackbar.openSnackbar(data.msg);
            this._router.navigate(['user'])
          }
        })
      }
     })
  }

}
