import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user!: User;

  constructor() {
  }
  receiveUser(receivedUser: User) {
    this.user=receivedUser;
    console.log('receiveUser= '+this.user.email)
  }
  ngOnInit(): void {
  }

}
