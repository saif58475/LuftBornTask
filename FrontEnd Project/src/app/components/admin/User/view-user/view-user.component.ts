import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../../../shared/API-Service/services/user.service';
import { User, Response } from '../../../../shared/Models/login/login-class';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  Users:User[];

  constructor( private _Router:Router
             , private _UserService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  //To GetAll Users
  getUsers(){
    this._UserService.GetAll().subscribe((res : Response<User>) => {
      this.Users = res.data;
    })
  }
  //To Delete Record
  delete(id : string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._UserService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getUsers();
        },(err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text:err.error.message    
          })
        },() => {
          console.log("completed");
        })
      }
    })
    
  }
}
