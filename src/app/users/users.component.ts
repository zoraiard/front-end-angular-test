import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../domain/user';
import { UserService } from '../services/user.service';
import { CsvDataService } from '../domain/csv.data.service';

export class PrimeUser implements User {
  constructor(public id?, public firstName?, public lastName?, 
    public age?, public description?) {}
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})

export class UsersComponent implements OnInit {
  csvDataService: CsvDataService;
  users: User[];
  options: any;

  constructor(private userService: UserService) { } 
  @Output() valueChange = new EventEmitter();

  ngOnInit() {  
    this.csvDataService = new CsvDataService();
    this.loadData();   
  }

  loadData(){
    this.userService.findAll().subscribe(
      users => this.users = users,
      error =>{
        return;
      } /* Tratamos erros aqui :) */ ); 
  }

  downloadCSV() {
    this.csvDataService.exportToCsv("listUsers.csv", this.users)
  }
}
