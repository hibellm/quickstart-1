import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p> {{address.street}} {{address.city}} {{address.kanton}}</p>

  <button (click)="toggleRWDdb()">{{showRWDdb ? "hide":"Show"}}</button>
  <div *ngIf="showRWDdb">
  <h3> RWD Databases</h3>
  <ul>
    <li *ngFor="let db of RWDdb">
      {{db}}
    </li>
  </ul>
  </div>

  <form>
    <label>Name: </label><br />
    <input type="text" name="name" [(ngModel)]="name" />
  </form>
  `,
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  RWDdb:string[];
  showRWDdb: boolean;

  constructor(){
    this.name = 'Marcus Hibell';
    this.email= 'John.Smith@gmail.com'
    this.address={
      street: 'Mariasteinstrasse 77',
      city: 'Hofstetten',
      kanton:'So'
    }
    this.RWDdb =['CPRD','IPSOS','IMS'];
    this.showRWDdb = false;
  }

  toggleRWDdb(){
    if(this.showRWDdb == true){
          this.showRWDdb = false;
        } else {
            this.showRWDdb = true;
          }
  }
}

interface address{
  street: string;
  city: string;
  kanton: string;
}
