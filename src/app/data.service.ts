import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async isNotAuthorized(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        reject('Access Denied (You are NOT authorized)');
      });
    });
  }

}
