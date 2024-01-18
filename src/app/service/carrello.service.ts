import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from '../model/prodotto';
import { Prodottocarrello } from '../models/prodottocarrello';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService  {
list: Prodottocarrello[]=[]
quantità:any
  constructor(public http: HttpClient) {

   }




  RichiestaGetcarrello():void{
    this.http.get(`https://localhost:44363/api/CartItems/GetCartItems?customerId=2`).subscribe({
     next: res => {
      console.log(res)
       this.list = res as Prodottocarrello[];
     },
     error: err => { console.log(err)}

    })
   }

/*
   GetQuantitàcarrello():void{
    this.http.get(`https://localhost:44363/api/CartItems/GetCartItemCount?customerId=2`).subscribe({
     next: res => {
      console.log(res)
       this.quantità = res;
     },
     error: err => { console.log(err)}

    })
   }
   */

   getQuantitàCarrello(): Observable<any> {
    const url = `https://localhost:44363/api/CartItems/GetCartItemCount?customerId=2`; // Sostituisci con il percorso effettivo per getById
    return this.http.get<any>(url);
   }

   getTotaleCarrello(): Observable<any> {
    const url = `https://localhost:44363/api/CartItems/GetTotal?customerId=2`; // Sostituisci con il percorso effettivo per getById
    return this.http.get<any>(url);
   }



  addToCart(prodottoid:number,customerId:number):Observable<any>{

    return this.http.post(`https://localhost:44363/api/CartItems/AddToCart?productId=${prodottoid}&customerId=${customerId}`,null)
  }

  deleteProdotto(prodottoid:number, customerId:number):Observable<any>{
    return this.http.delete(`https://localhost:44363/api/CartItems/RemoveItem?customerId=${customerId}&removeProductId=${prodottoid}`);
  }

  updateData(prodottoid:number,customerId:number,quantita:number): Observable<any> {
    // Effettua la chiamata PUT
    return this.http.put<any>(`https://localhost:44363/api/CartItems/UpdateItem?customerId=${customerId}&updateProductId=${prodottoid}&quantity=${quantita}`,null);
  }

  }

function RichiestaGetcarrello() {
  throw new Error('Function not implemented.');
}

