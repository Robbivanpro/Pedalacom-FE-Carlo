import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../service/prodotto.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  constructor(public prodottoservice:ProdottoService){

  }
  responsedata1 :any;
  responsedata2 :any;
  responsedata3 :any;
  responsedata4 :any;
  responsedata5 :any;
  ngOnInit(): void {
    this.prodottoservice.getProductById(706).subscribe(
      (response: any) => {
        console.log(response);
        this.responsedata1 = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
    this.prodottoservice.getProductById(707).subscribe(
      (response: any) => {
        console.log(response);
        this.responsedata2 = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
    this.prodottoservice.getProductById(713).subscribe(
      (response: any) => {
        console.log(response);
        this.responsedata3 = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
    this.prodottoservice.getProductById(709).subscribe(
      (response: any) => {
        console.log(response);
        this.responsedata4 = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
    this.prodottoservice.getProductById(720).subscribe(
      (response: any) => {
        console.log(response);
        this.responsedata5 = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );
  }




}
