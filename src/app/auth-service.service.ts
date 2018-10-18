import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }
  public isAuthenticated(): boolean {
    if(localStorage.getItem('authKey')){
      return true;
    }
  }
}
