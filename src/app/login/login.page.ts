import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private awtenticate:AuthenticationService, private rawter:Router, private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  logIn(){
    this.awtenticate.login(this.email, this.password)
  }

  goToSignUp(){
    this.rawter.navigate(['signup']);
  }
}
