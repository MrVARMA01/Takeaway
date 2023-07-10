import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public UserRegistration(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8001/api/a1/register",user,{responseType:'text'as'json'});
  }
  public getAllRegistrations(){
    return this.http.get("http://localhost:8001/api/a1/users");
  }
  public deleteUser(UserId:number)
  {
    return this.http.delete("http://localhost:8001/api/a1/auth/user/delete/{userid}"+UserId);
  }
  public login(user:User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8001/api/a1/login",user,{responseType:'text'as'json'});
  }
  // public getToken(){
  //   return this.http.get("http://localhost:7000/api/r/token");
  // }
}
