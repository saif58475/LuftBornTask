import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Employee, Response } from '../../../shared/Models/login/login-class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public Data = new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient) { }

    // This to post the Employee 
    Create(employee):Observable<Response<Employee>>{
     return this._HttpClient.post<Response<Employee>>(`${environment.Server_URL}/Employee/Create`, employee);
    }
    // This to Update the Employee
    Update(employee_update):Observable<Response<Employee>>{
      return this._HttpClient.post<Response<Employee>>(`${environment.Server_URL}/Employee/Update`, employee_update);
     }
    // This to get the Deparmtents 
    GetAll():Observable<Response<Employee>>{
      return this._HttpClient.get<Response<Employee>>(`${environment.Server_URL}/Employee/GetAll`);
     }
    // This to get one Employee 
    GetById(employeeId : number):Observable<Response<Employee>>{
      return this._HttpClient.get<Response<Employee>>(`${environment.Server_URL}/Employee/GetById?id=${employeeId}`);
     }
    // This to delete the Employee
    Delete(employeeId):Observable<Response<null>>{
     return this._HttpClient.delete<Response<null>>(`${environment.Server_URL}/Employee/Delete?id=${employeeId}`); 
    }
}
