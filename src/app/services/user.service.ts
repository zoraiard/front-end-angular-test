import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../domain/user';


@Injectable({
    providedIn: 'root'
  })
export class UserService {

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<any>('assets/data/users.json')
                    .toPromise()
                    .then(res => <User[]> res.data)
                    .then(data => data);
    }
}