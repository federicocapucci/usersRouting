import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ListUsersComponent } from './components/dashboard/list-users/list-users.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardUserComponent } from './components/dashboard/list-users/card-user/card-user.component';
import { UserComponent } from './components/dashboard/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListUsersComponent,
    LayoutComponent,   
    CardUserComponent, UserComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
