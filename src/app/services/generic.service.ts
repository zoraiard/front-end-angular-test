import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APIHome = "http://localhost:3000/"

export abstract class GenericService<T> {
   
   private baseEndpoint: string

   constructor(protected http: HttpClient) {    
     
   }
   
   setBaseEndpoint(endpoint){
    this.baseEndpoint = APIHome+endpoint    
   }
   
   findAll(): Observable<T[]> {   
      return this.http.get<T[]>(this.baseEndpoint); 
   }
}