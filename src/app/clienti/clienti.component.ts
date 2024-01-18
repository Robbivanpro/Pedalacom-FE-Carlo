import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})

export class ClientComponent {

  responsedata:any
  ricercaText :string = "";
  constructor(public clientiservice:CustomerService,private route:Router){}

  ngOnInit():void{
    this.clientiservice.GetCostumer();
  }

  viewCustomerDetails(CustomerID:number):void{
    this.route.navigate(['/cliente',CustomerID])
  }

  getCustomerDetails(CustomerID:number):void{
    this.clientiservice.getCustomerById(CustomerID).subscribe(
      (response:any)=>{
        this.clientiservice=response;
      },
      (error:any)=>{
        console.error('Errore durante il recupero dei dettagli del prodotto', error);
      }
      );
  }

}
