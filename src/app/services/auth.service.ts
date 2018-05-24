import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // constructor(private session: SessionService) {}

  // public isSignedIn() {
  //   return !!this.session.accessToken;
  // }

  // public doSignOut() {
  //   this.session.destroy();
  // }

  // public doSignIn(accessToken: string, name: string) {
  //   if (!accessToken || !name) {
  //     return false;
  //   }
  //   this.session.accessToken = accessToken;
  //   this.session.name = name;
  //   return true;
  // }
  constructor() {}

  public isSignedIn() {
    return !!sessionStorage.getItem('accessToken');
  }

  public doSignOut() {
    sessionStorage.clear();
  }

  public doSignIn(accessToken: string, name: string) {
    if (!accessToken || !name) {
      return false;
    }
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('name', name);
    return true;
  }
}
