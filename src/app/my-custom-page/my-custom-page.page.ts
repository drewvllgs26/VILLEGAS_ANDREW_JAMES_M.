import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-custom-page',
  templateUrl: './my-custom-page.page.html',
  styleUrls: ['./my-custom-page.page.scss'],
})

export class MyCustomPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  IDEventBtn(){
    this.router.navigate(['my-custom-page/my-custom-page-with-id/2']);
  }

}
