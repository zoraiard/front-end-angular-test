import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

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
   
   findById(id: string): Observable<T[]> {
      return this.http.get<T[]>(this.baseEndpoint + '/' + id);
   }

   topTen(): Observable<T[]>{
      return this.http.get<T[]>(this.baseEndpoint + '/top-10')
   }

   alter(id: number, model: T): Observable<T> {
      return this.http.put<T>(this.baseEndpoint + '/' + id, model);
   }

   delete(id: number): Observable<any> {
      return this.http.delete(this.baseEndpoint + '/' + id);
   }
  
   save(model: T): Observable<T> {
      return this.http.post<T>(this.baseEndpoint, model);
   }
  
}