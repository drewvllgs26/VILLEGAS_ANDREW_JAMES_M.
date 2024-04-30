import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated: boolean = false;
  constructor(private rawter:Router, private alertCtrl:AlertController) { }
  canActivate(){
    return this.authenticated;
  }

  setAuthentication(auth: boolean) {
    if (auth == true) {
      localStorage.setItem("loggedIn", "true");
    } else (
      localStorage.setItem("loggedIn", "false")
    )
  }

  async signup(email: string, password: string, retypepw: string) {
    if (!email || !password || !retypepw){
      this.alertdsply('Error','Please fill-out all the fields');
      return;
    }

    if (password != retypepw){
      this.alertdsply('Error','Password does not match');
      return;
    }
    
    if (!email.includes('.') || !email.includes('@')){
      this.alertdsply('Error','Please put a valid email address');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.alertdsply('Success', 'Signed Up Succesfully!');
      this.rawter.navigate(['login']);
    })
    .catch((error) => {
      const errorcode = error.code;
      const errormsg = error.message;
      if (errormsg.includes("Error (auth/email-already-in-use)")) {
        this.alertdsply('Error', 'Email is already used!');
      } else if (errormsg.includes("Error (auth/invalid-email).")) {
        this.alertdsply('Error', 'Invalid email!');
      }
    });
  }

  async alertdsply(header: string, message: string ){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.setAuthentication(true);
      this.alertdsply('Success','Logged In Successfully!');
      this.authenticated = true;
      this.rawter.navigate(['dashboard']);
    }).catch((error) => {
      const errorcode = error.code;
      const errormsg = error.message;
      this.alertdsply('Error','Please put the correct email and password!')
    });
  }
}
