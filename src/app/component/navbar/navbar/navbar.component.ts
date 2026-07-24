import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService:AuthService,
    private _snackbarService:SnackbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {

  }

  onLogOut(){
    this._authService.logOut().subscribe({
      next:data=>{
        this._snackbarService.openSnackbar(data.msg);
        this._router.navigate([''])
      }
    })
  }
}
