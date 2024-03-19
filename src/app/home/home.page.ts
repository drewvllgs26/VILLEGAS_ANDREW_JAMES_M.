import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  OrgArr = [0];
  ArrNum = 1;
  ShowArr: String = this.OrgArr.toString();
  WillShow: boolean = false;
  constructor(private otentikit:AuthenticationService, private deeta:DataService) {}

  BeAuthorized(){
    console.log('You are authorized now!');
    this.otentikit.authenticate = true;
  }

  NotAuthorized(){
    console.log('You are not authorized now :(');
    this.otentikit.authenticate = false;
    this.WillShow = false;
  }

  async AddObject() {
    if (this.otentikit.authenticate) {
      console.log('Added an element to the object!')
      this.OrgArr = [...this.OrgArr, this.ArrNum];
      this.ArrNum += 1;
      this.ShowArr = this.OrgArr.toString();
      this.WillShow = false;
    } else {
      try {
        await this.deeta.isNotAuthorized();
      } catch (error) {
        console.error(error);
      }
    }
  }

  async ShowObject() {
    if (this.otentikit.authenticate) {
      console.log(this.OrgArr);
      this.WillShow = true;
    } else {
      try {
        await this.deeta.isNotAuthorized();
      } catch (error) {
        console.error(error);
      }
    }
  }
}
