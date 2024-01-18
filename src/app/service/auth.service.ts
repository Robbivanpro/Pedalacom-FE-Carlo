import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string): Observable<any>{
    const credentials = btoa(`{username,password}`);
    const headers = new  HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    });

    return this.http.post(`url`,{},{headers})
    .pipe(
      tap(response => this.handleLoginSuccess(response))
    )
  }

  private handleLoginSuccess(response:any):void{
    console.log("Login avvenuto con successo",response);
  }

  private handleError(error:any): Observable<any>{
    console.error('errore durante il login',error);
    return of(null);
  }
}
