import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss']
})
export class GetconfirmComponent implements OnInit {
getmsg!:string
  constructor(private _matDilogref:MatDialogRef<GetconfirmComponent>,
    @Inject(MAT_DIALOG_DATA)msg:string) { 
      this.getmsg=msg;
    }

  ngOnInit(): void {

  }

  Onconfirm(flag:boolean){
    this._matDilogref.close(flag);
  }
}
