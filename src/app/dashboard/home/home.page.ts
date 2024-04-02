import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { School } from '../../model/model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username : string | null = '';
  schools : School[] = [];
  constructor(private awtenticate: AuthenticationService, private rawter:Router, private toastCtrl : ToastController) { }

  ngOnInit(): void {
    this.awtenticate.authenticated = false;
    this.username = localStorage.getItem('loggedInUser');
    this.awtenticate.getSchools().subscribe(item => {
    this.schools = item;
    console.log(item)
    })
  }

  async helloToast() {
    const toast = await this.toastCtrl.create({
      message: 'Hi!!! You opted the Greeting Toast!',
      duration: 1500,
      position: 'middle'
    });
    await toast.present();
  }

  logOut(){
    this.rawter.navigate(['login']);
  }
}
