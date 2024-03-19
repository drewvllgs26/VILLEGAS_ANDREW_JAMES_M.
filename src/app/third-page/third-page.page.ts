import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.page.html'
})
export class ThirdPage {
  constructor(private rawter:Router, private awtenticate:AuthenticationService) {}
  goByEvent(){
    this.rawter.navigate(["third-page"]);
    if(this.awtenticate.authenticate  == false)
    alert("You are not authrized to enter the another page!")
  }

  goWithAuthorization(){
    alert("You are now authorized!")
    this.awtenticate.authenticate = true;
  }

  ionViewWillEnter() {
    console.log('You will now proceed to the last page');
  }

  ionViewWillLeave() {
    console.log('You will now leave the last page :(');
  }

  ionViewDidEnter() {
    console.log('You have proceeded to the last page!');
  }

  ionViewDidLeave() {
    console.log('You really did leave the last page :(');
  }

}

