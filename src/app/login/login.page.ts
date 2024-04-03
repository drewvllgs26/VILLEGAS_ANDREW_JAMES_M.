import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username : string = ''
  password : string = ''
  userCredentials = [{name:'admin', pw: 'password'},{name:'user1', pw: 'user1'},{name:'Andrew', pw: 'villegas'}]
  constructor(private alertCtrl:AlertController, private rawter:Router, private awtenticate:AuthenticationService, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async login(){
    const userFound = this.userCredentials.find(cred => cred.name === this.username && cred.pw === this.password);
    if (userFound){
      const alert = await this.alertCtrl.create({
        header: 'Login',
        subHeader: 'Status',
        message: 'Login success!',
        buttons: ['OK']
      });
      await alert.present();
      localStorage.setItem('loggedInUser', this.username);
      this.rawter.navigate(['dashboard/home'])
      this.awtenticate.authenticated = true;
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Login Failed',
        duration: 2000
      });
      toast.present();
    }
  }
}