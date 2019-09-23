import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/domain/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  providers: [UserService, FormBuilder,ConfirmationService, MessageService] 
  
})

export class UserDetailComponent implements OnInit { 
  user: any;
  title: string;
  userForm: FormGroup;
  

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private confirmationService: ConfirmationService,
              private locate: Location,
              private messageService: MessageService
            ) { } 

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.minLength(4)],       
      lastName: ['', Validators.required, Validators.minLength(4)],   
    });

    let id = this.route.snapshot.paramMap.get('id');
    this.title = "User Id: "+this.route.snapshot.paramMap.get('id');
    this.loadObject(id);    
  }

  loadObject(id) {
    this.userService.findById(id).subscribe(
      user => this.user = user,      
      error =>{
        return;
      } /* erro*/ );               
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
          this.locate.back();
        }
   });
  }
 
  salveUser(obj: User){
    this.userService.alter(obj.id, obj).subscribe(
      dados => {        
        obj = dados;                      
        this.msgSucess()      
      },      
      error => {     
      }
    );
    
  }
  
  msgSucess() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Saved User'});
  }
}
