import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { UserService } from '../../../../shared/API-Service/services/user.service';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent implements OnInit {
  userForm:FormGroup;
  button:boolean = false;
  update:boolean = false;
  IdUpdateRecord:string;
  constructor( private _Router:Router
             , private _FormBuilder:FormBuilder
             , private _UserService:UserService) { }

  ngOnInit(): void {
    this.initiate();
  }

  initiate(data?:any){
    this.userForm = this._FormBuilder.group({
      "firstName": [data?.firstName || '', Validators.required],
      "lastName": [data?.lastName || '', Validators.required],
      "email": [data?.email || '', [Validators.required, Validators.email]],
      "password": [data?.password || '', [Validators.required, Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$`)]]
    });
  }
  get fc(){
    return this.userForm.controls;
  }

  onSubmit(){
    this.button = true;
    if( this.userForm.status == "VALID" && this.update == false){
      this._UserService.Create(this.userForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "Record Created Successfully",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.userForm.reset();
       this._Router.navigate(['content/admin/ViewUser']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'Error',
               text: 'Check that all fields are validated',
             });
             this.button = false;
       })
    }else if(this.userForm.status == "VALID" && this.update == true){
      //this.userForm.addControl("Id", this.IdUpdateRecord);
      this._UserService.Update(this.userForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "Record Updated Successfully",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.userForm.reset();
       this._Router.navigate(['content/admin/ViewUser']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'Error',
               text: 'Check that all fields are validated',
             });
             this.button = false;
       })
    }
    else{
      this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'Error',
               text: 'Check that all fields are validated',
             });
             this.button = false;
    }
  }
  
   ngOnDestroy(){ }
}
