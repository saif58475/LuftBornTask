import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DepartmentService } from '../../../../shared/API-Service/services/department.service';
import { Department, Response } from '../../../../shared/Models/login/login-class';
@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  Departments:Department[];
  
  constructor( private _Router:Router
             , private _DepartmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  //To GetAll Departments
  getDepartments(){
    this._DepartmentService.GetAll().subscribe((res : Response<Department>) => {
      this.Departments = res.data;
    })
  }
  //To Update Record
  update(record:object){
    this._DepartmentService.Data.next(record);
    this._Router.navigate(['content/admin/InsertDepartment']);
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
        this._DepartmentService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getDepartments();
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
