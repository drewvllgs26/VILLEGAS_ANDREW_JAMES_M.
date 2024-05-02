import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { AuthenticationService } from '../authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  users: User = new User();
  ratings: number[] = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1]
  id:any;

  constructor(private rawter:Router, private rawt:ActivatedRoute, private crud:CrudService, private awtenticate: AuthenticationService, private loadingCtrl:LoadingController, private alertController:AlertController) { }

  ngOnInit() {
    this.id = this.rawt.snapshot.paramMap.get('id');
    this.updates(this.crud.theuserList);
    console.log(this.crud.theuserList)
  }

  goToHome(){
    this.rawter.navigate(['home']);
  }

  async updateData() {
    this.crud.isLoading = true;
    if(this.crud.isLoading = true) {
      if (this.users.id) {
      await this.crud.updateData(this.users);
      this.awtenticate.toastdsply('Data Updated')
    }
    this.users = new User(); 
    this.rawter.navigate(['home']);
    }
    this.crud.isLoading = false;
  }
  
  updates(users: iUser[]) {
    users.forEach(user => {
      if (this.id == user.id) {
        this.users.id = user.id;
        this.users.gameName = user.gameName;
        this.users.genre = user.genre;
        this.users.price = user.price;
        this.users.quantity = user.quantity;
        this.users.dateRelease = user.dateRelease;
        this.users.rating = user.rating;
        this.users.isAvailable = user.isAvailable;
      }
    });
  }
}
