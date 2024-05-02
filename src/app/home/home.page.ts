import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User, iUser } from './home.model';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userList: iUser[] = [];
  users: User = new User();

  constructor(private rawter:Router, private awtenticate:AuthenticationService, private crud: CrudService) {}

  ionViewWillEnter(){
    console.log();
    this.user();
  }

  logOut() {
    this.rawter.navigate(['login']);
    this.awtenticate.setAuthentication(false);
  }

  update(user: User) {
    this.rawter.navigate(['update', user.id]);
    this.crud.theuserList = this.userList;
    this.crud.edit(user);
  }

  addData() {
    this.rawter.navigate(['create']);
  }

  async user() {
    this.crud.isLoading = true;
    this.userList = await this.crud.getUsers();
    this.crud.theuserList = this.userList;
    this.crud.isLoading = false;
  }

  async delete(user: User) {
    const confirmation = confirm('Are you sure you want to delete this game data?');
    if (!confirmation) {
      this.crud.alertdsply('Error','Data not deleted');
      return;
    }
    this.crud.isLoading = true;
    await this.crud.deleteData(user);
    this.crud.toastdsply('Data Deleted');
    this.user();
    this.users = new User();
    this.crud.isLoading = false;
  }

}
