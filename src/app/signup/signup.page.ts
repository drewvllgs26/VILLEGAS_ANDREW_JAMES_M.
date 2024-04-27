import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  retypepw: string = '';
  constructor(private alertCtrl:AlertController, private rawter: Router, private awtenticate:AuthenticationService) { }

  ngOnInit(){}


  signingUp(){
    if (!this.email || !this.password || !this.retypepw){
      this.awtenticate.alertdsply('Error','Please fill-out all the fields');
      return;
    }

    if (this.password != this.retypepw){
      this.awtenticate.alertdsply('Error','Password does not match');
      return;
    }
    
    if (!this.email.includes('.') || !this.email.includes('@')){
      this.awtenticate.alertdsply('Error','Please put a valid email address');
      return;
    }

    this.awtenticate.signup(this.email, this.password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.awtenticate.alertdsply('Success','Signed Up Succesfully!');
      this.rawter.navigate(['login']);
    })
    .catch((error) => {
      const errorcode = error.code;
      const errormsg = error.message;
      this.awtenticate.alertdsply('Error','Already Signed Up!');
    });
    this.email = '';
    this.password = '';
    this.retypepw = '';
  }

}
