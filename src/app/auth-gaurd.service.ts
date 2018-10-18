import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router'
import { AuthServiceService as AuthService } from './auth-service.service'
import { UserService  } from '../app/shared/services/user/user.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {
  constructor(public router: Router,public authService: AuthService,public userService: UserService) { }
  async canActivate(){
    if(this.authService.isAuthenticated()){
      let isUserAuthonticated = await this.userService.setCurrentUser()
      return isUserAuthonticated?true:false;
    }
    this.router.navigate(['/']);
    return false;
  }
}
