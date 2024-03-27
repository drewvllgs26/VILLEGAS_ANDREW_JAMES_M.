import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username : string | null = '';
  constructor(private awtenticate: AuthenticationService) { }

  ngOnInit() {
    this.awtenticate.authenticated = false;
    this.username = localStorage.getItem('loggedInUser');
  }

}
