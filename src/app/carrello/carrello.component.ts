import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../service/carrello.service';

import { Prodotto } from '../model/prodotto';
import { Prodottocarrello } from '../models/prodottocarrello';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  quantita:any
  totale:any
  list: Prodottocarrello[]=[]
  constructor(public carrelloservice:CarrelloService){}


  ngOnInit(): void {
    this.carrelloservice.RichiestaGetcarrello();
    this.carrelloservice.getQuantitàCarrello().subscribe(
      (response:any)=>{
        console.log(response)
        this.quantita= response ;
      },
      (error:any) => {
        console.log(error.error)
      });

      this.carrelloservice.getTotaleCarrello().subscribe(
        (response:any)=>{
          console.log(response)
          this.totale= response;
        },
        (error:any) => {
          console.log(error.error)
        });



  }

  updateData(id:number,customerId:number,quantita:number): void {
    const newData = { /* i tuoi nuovi dati */ };

    this.carrelloservice.updateData(id,customerId,this.quantita).subscribe(
      (response) => {
        console.log('Dati aggiornati con successo', response);
        this
        // Puoi gestire la risposta qui
      },
      (error) => {
        console.error('Errore durante l\'aggiornamento dei dati', error);
        // Puoi gestire l'errore qui
      }
    );
  }

  deleteindirizzo(id:number,customerId:number): void{
    this.carrelloservice.deleteProdotto(id,customerId)
    .subscribe(
      ()=>{
        console.log("oggetto eliminato");
        this.list=this.list.filter(list => list.productId !== id)
      },

    error => {
      console.error("errore durante la cancellazione", error)
    }
    );

}









}
