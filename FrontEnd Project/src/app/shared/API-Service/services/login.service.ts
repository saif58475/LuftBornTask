import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { LoginClass, Response } from '../../../shared/Models/login/login-class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient:HttpClient) { }

 user_login(person):Observable<Response<LoginClass>>{
  return this._HttpClient.post<Response<LoginClass>>(`${environment.Server_URL}/User/Login`, person);
 }
}
