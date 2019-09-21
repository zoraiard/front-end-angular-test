import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export abstract class GenericService<T> {

   protected url:string;

   constructor(protected http: HttpClient, private baseURL: string) {    
       this.url = baseURL;  
   }
    
   findAll(): Observable<T[]> {   
      return this.http.get<T[]>(this.baseURL); 
   }

}