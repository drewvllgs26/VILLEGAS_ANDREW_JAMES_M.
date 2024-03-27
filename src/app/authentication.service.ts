import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { School } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;
  constructor(private http: HttpClient) { }

  canActivate(){
    return this.authenticated;
  }

  getSchools(){
    return this.http.get<School[]>('http://universities.hipolabs.com/search?name=Philippines&country=philippines')
  }

  
}

