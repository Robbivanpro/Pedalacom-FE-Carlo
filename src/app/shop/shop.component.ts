import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { ProdottoService } from '../service/prodotto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrelloService } from '../service/carrello.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  responsedata : any
  searchText : string = "";
  constructor(public requestservice : ProdottoService, private route : Router,public shop:CarrelloService){}

  ngOnInit(): void {
    this.requestservice.RichiestaGet();
    //controllare la policy nel back-en



  }

  viewProductDetails(productId: number): void {
    this.route.navigate(['/product', productId]);
  }
  NavigaSingolo(){
    this.route.navigate(['/newproduct'])
  }

  addToCarrello(prodottoid:number,customerId:number):void{
    this.shop.addToCart(prodottoid,customerId)
    .subscribe(
      (response)=>{
        console.log("ciao")
        this.responsedata = response
      },
      (error)=>{
        console.error("Errore durante l'inserimento",error)
        console.log(error.error)
      }
      );

  }

  getProductDetails(productId: number): void {
    this.requestservice.getProductById(productId).subscribe(
      (response: any) => {
        this.responsedata = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
  }




}
