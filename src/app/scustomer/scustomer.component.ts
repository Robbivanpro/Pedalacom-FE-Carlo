import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-scustomer',
  templateUrl: './scustomer.component.html',
  styleUrls: ['./scustomer.component.css']
})
export class ScustomerComponent implements OnInit{

  constructor(private clienteservice:CustomerService, private route: ActivatedRoute){}
  clientidata: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const customerId = +params['id'];


  this.clienteservice.getCustomerById(customerId).subscribe(
    (response: any) => {
      console.log(response);
      this.clientidata = response; // Assegna il prodotto ottenuto dalla risposta dell'API
    },
    (error: any) => {
      console.error('Errore durante il recupero dei dettagli del prodotto:', error);
    }
  );

});

}
}
