import { Component } from '@angular/core';
import { User } from './domain/user';
import { UserService } from './services/user.service';

export class PrimeUser implements User {
  
  constructor(public id?, public firstName?, public lastName?, 
    public age?, public description?) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {

  displayDialog: boolean;

  user: User = new PrimeUser();

  selectedUser: User;
  
  newUser: boolean;
  
  selectedUsers: User[];

  private users: User[];

  cols: any[];

  title = 'front-end-angular-test';

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.getUsers().then(users => this.users = users);
    
    
    this.loadDate();

    this.cols = [
        { field: 'firstName', header: 'Name' },        
    ];    
  } 

  loadDate(){
    this.userService.findAll().subscribe(
      users => this.users = users,
      error =>{
        return;
      } /* Tratamos erros aqui :) */ );    
      
  }
}
