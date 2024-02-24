
 
 

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 
import { RouterModule } from '@angular/router';
 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPrintElementModule } from 'ngx-print-element';
 
import { NgApexchartsModule } from 'ng-apexcharts';
 

 

// **  
import {NgxPaginationModule} from 'ngx-pagination';

// cookie 
import { CookieService } from 'ngx-cookie-service'

import { DxReportViewerModule } from 'devexpress-reporting-angular';
import { ViewDepartmentComponent } from './Department/view-department/view-department.component';
import { InsertDepartmentComponent } from './Department/insert-department/insert-department.component';
import { ViewEmployeeComponent } from './Employee/view-employee/view-employee.component';
import { InsertEmployeeComponent } from './Employee/insert-employee/insert-employee.component';
import { ViewUserComponent } from './User/view-user/view-user.component';
import { InsertUserComponent } from './User/insert-user/insert-user.component';




 @NgModule({
  declarations: [
    ViewDepartmentComponent,
    InsertDepartmentComponent,
    ViewEmployeeComponent,
    InsertEmployeeComponent,
    ViewUserComponent,
    InsertUserComponent,
    
  ],
  imports: [
    DxReportViewerModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ArchwizardModule,
    SweetAlert2Module,
    NgxPaginationModule,
    RouterModule,
    NgApexchartsModule,
    NgxPrintElementModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
   CookieService
  ],
  
  exports:[ ]
})
export class AdminModule { }
