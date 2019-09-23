import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/domain/user';
import { EventEmitter } from 'events';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  providers: [UserService]
})
export class UsersListComponent implements OnInit {

  @Input() users: User[];
  @Output() selectedUsersChange = new EventEmitter();

  selectedUsers: User[];
  title: string;
  cols: any[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.title = "List of Users"
    this.cols = [
      { field: 'firstName', header: 'Name' },        
    ];    
  }

  delete(selectedUser){  
    this.userService.delete(selectedUser.id)
    .subscribe(res => {        
      }, (err) => {
        console.log(err);        
      }
    ); 
    let index = this.users.indexOf(selectedUser);    
    this.users = this.users.filter((val, i) => i != index);    
    
    if (this.selectedUsers){
      this.selectedUsers = this.selectedUsers.filter(obj => obj !== selectedUser);
    }    
  }  
  
  deleteSelectd() {
    for(let i in this.selectedUsers){
      this.users = this.users.filter(obj => obj !== this.selectedUsers[i]);
    } 
    this.selectedUsers = [];
  }

  selectedUsersChanged(){
    //this.selectedUsersChange.emit({this.selectedUsers}));   
  }
}

