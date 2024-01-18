import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  list: Customer[] = []
  constructor(private http: HttpClient) { }

  GetCostumer():void {
    this.http.get('https://localhost:44322/api/Customers').subscribe({
      next: res => {
        console.log("la get c'è");
        this.list = res as Customer[];

      },
      error: err => { console.log(err)}

     })
}

getCustomerById(customerId: number): Observable<any> {
  const url = `https://localhost:44322/api/Customers/${customerId}`; // Sostituisci con il percorso effettivo per getById
  return this.http.get<any>(url);
}

postCustomer(data:any):Observable<any>{
  return this.http.post('https://localhost:44322/api/Customers',data)
  }
}