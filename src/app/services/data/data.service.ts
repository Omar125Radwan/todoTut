import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private navParams: any = {};

  constructor() { }

  getParams() {
    return this.navParams;
  }

  setParams(body) {
    this.navParams = body;
  }
}
