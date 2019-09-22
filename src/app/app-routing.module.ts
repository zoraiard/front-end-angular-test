import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'List of Users' }
  },
  {
    path: 'user-details/:id',
    component: UserDetailComponent,
    data: { title: 'User Details' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
