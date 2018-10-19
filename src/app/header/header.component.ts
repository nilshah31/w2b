import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { UserService } from '../shared/services/user/user.service'
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() email    : string
  @Input() password : string
  public user:Object;
  constructor(
    private http       : HttpClient,
    public router      : Router,
    public userService : UserService
  ) {
    this.email    = ""
    this.password = ""
    this.user = this.userService.getCurrentUser()
  }
  ngOnInit() {
    this.email    = "";
    this.password = "";
  }
  loginUser(){
    this.http
      .post('http://localhost:8001/api/users/login',{email:this.email,password:this.password})
      .subscribe((res)=>{
        localStorage.setItem("authKey", res['authToken']);
        this.router.navigate(['/dashboard']);
      },(xhr)=>{
        console.log("Error")
      })
  }
  logOutuser(){
    this.userService.setUser(undefined)
    localStorage.removeItem("authKey")
    this.user = this.userService.getCurrentUser()
  }
}
