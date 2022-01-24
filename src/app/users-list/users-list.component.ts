import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users!: User[];
  userSubscription!: Subscription;


  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(users);
      }
    );
  }
  onDeleteUser(id: string) {
    this.userService.deleteUser(id)
  }
  onCheckUser(id: string):User {
    const user = this.userService.getUserById(id) as User;
    return user;
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
