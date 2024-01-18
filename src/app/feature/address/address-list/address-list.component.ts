import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  indirizzi:any[] = [];


    //Ricorda di dichiarare la variabile!!!!!!!!!1



    constructor (public addressService: AddressService){


  }
    ngOnInit(): void {
      this.addressService.RichiestaGet();

    }

    deleteindirizzo(id:number): void{
      this.addressService.onDelete(id)
      .subscribe(
        ()=>{
          console.log("oggetto eliminato");
          this.indirizzi=this.indirizzi.filter(indirizzo => indirizzo.id !== id)
        },

      error => {
        console.error("errore durante la cancellazione", error)
      }
      );

  }

}

