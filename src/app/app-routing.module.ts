import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserCardComponent } from './user/user-card/user-card.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UsersListComponent } from './user/users-list/users-list.component';


const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'usersPage',component: UserPageComponent},
  {path : 'addUser',component: UserFormComponent},
  {path : 'editUser/:id',component: UserFormComponent},
  {path : 'deleteUser/:id',component: UsersListComponent},
  {path : 'userCard/:id',component: UserCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
