import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user;
  constructor(
    private http: HttpClient,
    public router: Router
  ) { }
  getCurrentUser(){
    return  this.user || null;
  }
  setCurrentUser(){
    let headers = new HttpHeaders({
      'content-type'    : 'application/json',
      'authKey': localStorage.getItem('authKey')
    });
    return this.http
      .get('http://localhost:8001/api/users/',{headers:headers})
      .subscribe((res)=>{ 
        this.user = res['user'];
        return true;
      },(xhr)=>{
        return false;
        console.log("Error")
      })
  }
}
