import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
  "Content-Type":'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

  registerUser(user:any):Observable<any>{
    // let headers = new HttpHeaders();
    // headers.append('Content-Type','application/json');
    return this.http.post<any>('http://localhost:3000/users/register',user,httpOptions);
  }

}
