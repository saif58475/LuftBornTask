import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User, Response } from '../../../shared/Models/login/login-class';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private _HttpClient:HttpClient) { }

    // This to post the User 
    Create(user):Observable<Response<User>>{
     return this._HttpClient.post<Response<User>>(`${environment.Server_URL}/User/Create`, user);
    }
    // This to Update the User
    Update(user_update):Observable<Response<User>>{
      return this._HttpClient.put<Response<User>>(`${environment.Server_URL}/User/Update`, user_update);
     }
    // This to get the User 
    GetAll():Observable<Response<User>>{
      return this._HttpClient.get<Response<User>>(`${environment.Server_URL}/User/GetAll`);
     }
    // This to get one User 
    GetById(userId : number):Observable<Response<User>>{
      return this._HttpClient.get<Response<User>>(`${environment.Server_URL}/User/GetById?id=${userId}`);
     }
    // This to delete the User
    Delete(userId):Observable<Response<null>>{
     return this._HttpClient.delete<Response<null>>(`${environment.Server_URL}/User/Delete?id=${userId}`); 
    }
}
