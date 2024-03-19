import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.page.html'
})
export class AnotherPage implements OnInit {

  constructor(private rawter: Router, private awtenticate:AuthenticationService) { }

  ngOnInit() {
    this.awtenticate.authenticate = false; 
  }
  goByEvent(){
    this.rawter.navigate(["third-page"]);
    if(this.awtenticate.authenticate  == false)
    alert("You are not authorized to enter the last page!")
  }

  goWithAuthorization(){
    alert("You are now authorized!")
    this.awtenticate.authenticate = true;
  }

  ionViewWillEnter() {
    console.log('You will now proceed to another page');
  }

  ionViewWillLeave() {
    console.log('You will now leave the another page :(');
  }

  ionViewDidEnter() {
    console.log('You have proceeded to another page!');
  }

  ionViewDidLeave() {
    console.log('You really did leave the another page :(');
  }
}