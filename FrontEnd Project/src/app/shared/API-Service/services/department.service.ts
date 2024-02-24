import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Department, Response } from '../../../shared/Models/login/login-class';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  public Data = new BehaviorSubject(null)

  constructor(private _HttpClient:HttpClient) { }

    // This to post the Deparmtents 
    Create(department):Observable<Response<Department>>{
     return this._HttpClient.post<Response<Department>>(`${environment.Server_URL}/Department/Create`, department);
    }
    // This to Update the Deparmtents
    Update(departent_update):Observable<Response<Department>>{
      return this._HttpClient.post<Response<Department>>(`${environment.Server_URL}/Department/Update`, departent_update);
     }
    // This to get the Deparmtents 
    GetAll():Observable<Response<Department>>{
      return this._HttpClient.get<Response<Department>>(`${environment.Server_URL}/Department/GetAll`);
     }
    // This to get one Department 
    GetById(departmentId : string):Observable<Response<Department>>{
      return this._HttpClient.get<Response<Department>>(`${environment.Server_URL}/Department/GetById?id=${departmentId}`);
     }
    // This to delete the Department
    Delete(departmentId):Observable<Response<null>>{
     return this._HttpClient.delete<Response<null>>(`${environment.Server_URL}/Department/Delete?id=${departmentId}`); 
    }
}
