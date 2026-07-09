import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/modules/user';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  editUser!: IUser
  isInEditMode: boolean = false;
  userId!: string
  constructor(private _userService: UserService,
    private _snackbar: SnackbarService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.onSkillsAdd();
    this.OnEdit();
    this.isAddSameHandletr()
    this.permamntAddresshandler();
  }

  createForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      profileDescription: new FormControl(null, [Validators.required]),
      profileImage: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
      experience: new FormControl(null, [Validators.required]),
      isActive:new FormControl(null,[Validators.required]),
      address: new FormGroup({
        currentAddress: new FormGroup({
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          country: new FormControl(null, [Validators.required]),
          zipCode: new FormControl(null, [Validators.required])
        }),
        permanentAddress: new FormGroup({
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          country: new FormControl(null, [Validators.required]),
          zipCode: new FormControl(null, [Validators.required])
        })
      }),

      skills: new FormArray([]),
      isAddSame: new FormControl({ value: null, disabled: true }, [Validators.required])
    })
  }

  onSkillsAdd() {
    if (this.SkillArray.valid) {
      let SkillControl = new FormControl(null, [Validators.required]);
      this.SkillArray.push(SkillControl);
    }
  }

  get f() {
    return this.userForm.controls;
  }

  get SkillArray() {
    return this.f['skills'] as FormArray
  }


  onAddUser() {
    let AddUerObj: IUser = {
      ...this.userForm.getRawValue(),
      userId: Date.now().toString()
    }
    this._userService.OnaddUser(AddUerObj).subscribe({
      next: data => {
        this._snackbar.openSnackbar(data.msg);
        this._router.navigate(['user'])
      }
    })
  }

  OnEdit() {
    this.userId = this._routes.snapshot.paramMap.get('userId')!
    if (this.userId) {
      this._userService.fetchUserById(this.userId).subscribe({
        next: data => {
      this.isInEditMode = true;

          console.log('API DATA =>', data);

          this.editUser = data;

          this.SkillArray.clear();

          this.editUser.skills.forEach(skill => {
            this.SkillArray.push(
              new FormControl(skill, Validators.required)
            );
          });

          this.userForm.patchValue(this.editUser);

          console.log(this.userForm.getRawValue());

        }
      })


    }
  }

  onUpdate() {
    let updatedObj: IUser = {
      ...this.userForm.getRawValue(),
      userId: this.userId
    }
    this._userService.onUpdate(updatedObj).subscribe({
      next: data => {
        this._snackbar.openSnackbar(data.msg);
        this._router.navigate(['user'])
      }
    })
  }
  isAddSameHandletr() {
    this.f['address'].get('currentAddress')?.valueChanges.subscribe(val => {
      if (this.f['address'].get('currentAddress')?.valid) {
        this.f['isAddSame'].enable();
      } else {
        this.f['isAddSame'].disable();
        this.f['isAddSame'].reset();
      }
    })
  }

  permamntAddresshandler() {
    this.f['isAddSame'].valueChanges.subscribe(val => {

      if (val) {

        let CurrentAdd =
          this.f['address']
            .get('currentAddress')
            ?.value;

        this.f['address']
          .get('permanentAddress')
          ?.patchValue(CurrentAdd);

        this.f['address']
          .get('permanentAddress')
          ?.disable();

      } else {

        this.f['address']
          .get('permanentAddress')
          ?.enable();
        if (!this.isInEditMode) {
          this.f['address']
            .get('permanentAddress')
            ?.reset();
        }

      }

    });
  }
}
