import { Component } from '@angular/core';

import {userList} from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userList:any = [];
  constructor(){
    this.userList = userList;
  }
}

