import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router'
import { AuthServiceService as AuthService } from './auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {
  constructor(public router: Router,public authService: AuthService) { }
  canActivate():boolean{
    if(this.authService.isAuthenticated()){
      return true;      
    }
    this.router.navigate(['/']);
    return false;
  }
}
