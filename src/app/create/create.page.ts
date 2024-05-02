import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  users: User = new User();
  ratings: number[] = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1]
  constructor(private rawter: Router, private crud: CrudService) { }

  ngOnInit() {
  }

  async inputData() {
    if (!this.users.id) {
      this.crud.addData(this.users);
      this.crud.toastdsply('Data Added')
    } 
      this.users = new User();
      this.rawter.navigate(['home']);
  }

  goToHome(){
    this.rawter.navigate(['home']);
  }
}
