import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../domain/user';
import { GenericService } from './generic.service';

const endpoint = 'users';

@Injectable({
    providedIn: 'root'
})

export class UserService extends GenericService<User>{
   
    constructor(http: HttpClient) {
      super(http);
      this.setBaseEndpoint("users");
    }

    getUsers() {
        return this.http.get<any>('assets/data/users.json')
                    .toPromise()
                    .then(res => <User[]> res.data)
                    .then(data => data);
    }
   
}