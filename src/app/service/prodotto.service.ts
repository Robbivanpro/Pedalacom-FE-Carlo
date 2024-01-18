import { Injectable } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  list: Prodotto[]=[]
  data: Product[]=[]
  constructor(private http: HttpClient) { }

  RichiestaGet():void{
    this.http.get('https://localhost:44322/api/Products').subscribe({
     next: res => {
       this.list = res as Prodotto[];
     },
     error: err => { console.log(err)}

    })
   }

   getProductById(productId: number): Observable<any> {
    const url = `https://localhost:44322/api/Products/${productId}`; // Sostituisci con il percorso effettivo per getById
    return this.http.get<any>(url);
  }

   postProdotti(data:any):Observable<any>{
   return this.http.post('https://localhost:44322/api/Products',data)
   }

   onDelete(id:number){
    return this.http.delete("url da inserire"+ id)
   }
}
