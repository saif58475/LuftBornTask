import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { EmployeeService } from '../../../../shared/API-Service/services/employee.service';
import { DepartmentService } from '../../../../shared/API-Service/services/department.service';
import { environment } from 'src/environments/environment.prod';
import { Department, Response } from 'src/app/shared/Models/login/login-class';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {
  EmployeeForm:FormGroup;
  EmployeeFormData:FormData;
  Image:File;
  imageLogo:string;
  button:boolean = false;
  update:boolean = false;
  IdUpdateRecord:string;
  Departments:Department[];
  constructor( private _Router:Router
             , private _FormBuilder:FormBuilder
             , private _EmployeeService:EmployeeService
             , private _DepartmentService:DepartmentService ) { }

  ngOnInit(): void {
    this.GetDropDown();
    this._EmployeeService.Data.subscribe((res) => {
      if(res == null){
        this.initiate();
      }else{
        this.IdUpdateRecord = res.id;
        this.imageLogo = environment.UpdateImageUrl + res.imagePath;
        this.initiate(res);
        this.update = true;
      }
    })
  }


  initiate(data?:any){
    this.EmployeeForm = this._FormBuilder.group({
      "name": [data?.name || '', Validators.required],
      "phoneNo": [data?.phoneNo ||'', [Validators.required, Validators.pattern(`^01[0125]{1}[0-9]{8}`)]],
      "departmentId": [data?.departmentId ||'', Validators.required],
    });
  }
  //To Get The Departments
  GetDropDown(){
  this._DepartmentService.GetAll().subscribe((res : Response<Department>) => {
    this.Departments = res.data;
  })
  }
  // imgFile
  getLogoUrl(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.Image = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageLogo = reader.result as string;
      };
    }
  }
  get fc(){
    return this.EmployeeForm.controls;
  }
  append(){
    this.EmployeeFormData = new FormData();
    this.EmployeeFormData.append("Name", this.EmployeeForm.value.name);    
    this.EmployeeFormData.append("PhoneNo", this.EmployeeForm.value.phoneNo);        
    this.EmployeeFormData.append("DepartmentId", this.EmployeeForm.value.departmentId);    
    this.EmployeeFormData.append("Image", this.Image);    
   }

   onSubmit(){
    this.button = true;
    if( this.EmployeeForm.status == "VALID" && this.update == false){
      this.append();
      this._EmployeeService.Create(this.EmployeeFormData).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "Record Created Successfully",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.EmployeeForm.reset();
       this._Router.navigate(['content/admin/ViewEmployee']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'Error',
               text: 'Check that all fields are validated',
             });
             this.button = false;
       })
    }else if(this.EmployeeForm.status == "VALID" && this.update == true){
      this.append();
      this.EmployeeFormData.append("Id", this.IdUpdateRecord);
      this._EmployeeService.Update(this.EmployeeFormData).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "Record Updated Successfully",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.EmployeeForm.reset();
       this._Router.navigate(['content/admin/ViewEmployee']);
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
  
   ngOnDestroy(){
    this._EmployeeService.Data.next(null);
    this.imageLogo = null;
     }
}
