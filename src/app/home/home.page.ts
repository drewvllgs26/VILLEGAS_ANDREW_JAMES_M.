import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private rawter: Router, private awtenticate:AuthenticationService) {}


  goByEvent(){
    this.rawter.navigate(["another-page"]);
    if(this.awtenticate.authenticate  == false)
    alert("You are not authorized to enter the another page!")
  }

  goWithAuthorization(){
    alert("You are now authorized!")
    this.awtenticate.authenticate = true;
  }

  ionViewWillEnter() {
    console.log('You will now proceed to home page');
  }

  ionViewWillLeave() {
    console.log('You will now leave the home page :(');
  }

  ionViewDidEnter() {
    console.log('You have proceeded to home page!');
  }

  ionViewDidLeave() {
    console.log('You really did leave the home page :(');
  }
}
