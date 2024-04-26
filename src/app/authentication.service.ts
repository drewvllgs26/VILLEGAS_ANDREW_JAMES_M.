import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;
  constructor(private rawter:Router) { }
  setAuthentication(auth:boolean) {
    if (auth) {
      localStorage.setItem("loggedIn","true");
    }
  }
  canActivate(){
    return this.authenticated;
  }

  async signup(email: string, password: string) {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  async login(email: string, password: string) {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
  }
}
