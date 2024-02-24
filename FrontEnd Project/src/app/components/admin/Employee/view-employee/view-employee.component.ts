import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../../../shared/API-Service/services/employee.service';
import { Employee, Response } from '../../../../shared/Models/login/login-class';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
Employees:Employee[];

constructor( private _Router:Router
           , private _EmployeeService:EmployeeService) { }

ngOnInit(): void {
this.getEmployees();
}

//To GetAll Employee
getEmployees(){
  this._EmployeeService.GetAll().subscribe((res : Response<Employee>) => {
    this.Employees = res.data;
  })
}
//To Update Record
update(record:object){
  this._EmployeeService.Data.next(record);
  this._Router.navigate(['content/admin/InsertEmployee']);
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
      this._EmployeeService.Delete(id).subscribe((res) => {
        Swal.fire({
          icon: "success",
          title: "Deleted Successfuly",
          showConfirmButton: false,
          timer: 1500,
        });
     this.getEmployees();
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
