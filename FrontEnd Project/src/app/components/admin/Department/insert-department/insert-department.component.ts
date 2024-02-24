import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { DepartmentService } from '../../../../shared/API-Service/services/department.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-insert-department',
  templateUrl: './insert-department.component.html',
  styleUrls: ['./insert-department.component.css']
})
export class InsertDepartmentComponent implements OnInit {
  DepartmentForm:FormGroup;
  DepartmentFormData:FormData;
  Image:File;
  imageLogo:string;
  button:boolean = false;
  update:boolean = false;
  IdUpdateRecord:string;
  constructor( private _Router:Router
             , private _FormBuilder:FormBuilder
             , private _DepartmentService:DepartmentService ) { }

  ngOnInit(): void {
    this._DepartmentService.Data.subscribe((res) => {
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
    this.DepartmentForm = this._FormBuilder.group({
      "Name": [data?.name || '', Validators.required],
      "Code": [data?.code ||'', Validators.required],
    });
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
    return this.DepartmentForm.controls;
  }
  append(){
    this.DepartmentFormData = new FormData();
    this.DepartmentFormData.append("Name", this.DepartmentForm.value.Name);    
    this.DepartmentFormData.append("Code", this.DepartmentForm.value.Code);    
    this.DepartmentFormData.append("Image", this.Image);    
   }

   onSubmit(){
    this.button = true;
    if( this.DepartmentForm.status == "VALID" && this.update == false){
      this.append();
      this._DepartmentService.Create(this.DepartmentFormData).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "Record Created Successfully",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.DepartmentForm.reset();
       this._Router.navigate(['content/admin/ViewDepartment']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'Error',
               text: 'Check that all fields are validated',
             });
             this.button = false;
       })
    }else if(this.DepartmentForm.status == "VALID" && this.update == true){
      this.append();
      this.DepartmentFormData.append("Id", this.IdUpdateRecord);
      this._DepartmentService.Update(this.DepartmentFormData).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "Record Updated Successfully",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.DepartmentForm.reset();
       this._Router.navigate(['content/admin/ViewDepartment']);
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
    this._DepartmentService.Data.next(null);
    this.imageLogo = null;
     }
}
