import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListUsersComponent } from './components/dashboard/list-users/list-users.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path:'', redirectTo: 'layout', pathMatch: 'full'},
  { path:'layout', component : LayoutComponent},
  { path:'dashboard' , component : DashboardComponent, children:[
    { path:'', component : ListUsersComponent },
    { path:'user/:id', component : UserComponent }
  ]},
  { path:'**', redirectTo: 'layout', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
