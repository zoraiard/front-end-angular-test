import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";  
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    PanelModule,
    TableModule,
    ButtonModule,
    InputTextModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
