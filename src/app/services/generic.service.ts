import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const apiUrl = "http://localhost:3000/"

const httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export abstract class GenericService<T> {
   
   private baseEndpoint: string

   constructor(protected http: HttpClient) {    
     
   }
   
   setBaseEndpoint(endpoint){
      this.baseEndpoint = apiUrl+endpoint    
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
      return this.http.put<T>(this.baseEndpoint + '/' + id, model, httpOptions);
   }

   delete(id: number): Observable<any> {
      return this.http.delete(this.baseEndpoint + '/' + id, httpOptions);
   }
  
   save(model: T): Observable<T> {
      return this.http.post<T>(this.baseEndpoint, model, httpOptions);
   }
  
   deleteProduct (id): Observable<T> {      
      return this.http.delete<T>(this.baseEndpoint, httpOptions)

   }

   private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        console.error(error); 
    
        return of(result as T);
      };
   }
}