import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() email    : string
  @Input() password : string
  constructor(
    private http: HttpClient,
    public router: Router,
  ) {
    this.email    = ""
    this.password = ""
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
}
