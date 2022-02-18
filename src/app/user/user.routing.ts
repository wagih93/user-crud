import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'usersPage', component: UserPageComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'editUser/:id', component: UserFormComponent },
  { path: 'deleteUser/:id', component: UsersListComponent },
  { path: 'userCard/:id', component: UserCardComponent },
];
export default routes;
