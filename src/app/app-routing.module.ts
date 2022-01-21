import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserCardComponent } from './user-card/user-card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'usersPage',component: UserPageComponent},
  {path : 'addUser',component: UserFormComponent},
  {path : 'test',component: UserCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
