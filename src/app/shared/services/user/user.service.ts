import { Injectable,ChangeDetectorRef } from '@angular/core';
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
  ) {
  }
  async getCurrentUser(){
    if(!this.user){
      let isUserAuthonticated = await this.setCurrentUser()
      return isUserAuthonticated?this.user:undefined;
    }
    return this.user || undefined;
  }
  setCurrentUser(){
    let headers = new HttpHeaders({
      'content-type'    : 'application/json',
      'authKey': localStorage.getItem('authKey')
    });
    if(this.user) return true;
    return this.http
      .get('http://localhost:8001/api/users/',{headers:headers})
      .subscribe((res)=>{ 
        console.log("res",res)
        this.user = res['user'];
        return true;
      },(xhr)=>{
        localStorage.removeItem("authKey")
        return false;
      })
  }
  setUser(value){
    this.user = value;
  }
}
