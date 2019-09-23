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
  counter = 0;

  ngOnInit() {  
    this.csvDataService = new CsvDataService();
    this.loadData();   
  }

  valueChanged() { 
     this.counter = this.counter + 1;
     this.valueChange.emit(this.counter);
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

  displayCounter(count) {
    console.log(count);
  }
}
