import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { Product } from 'src/app/models/product';
import { ProdottoService } from 'src/app/service/prodotto.service';

@Component({
  selector: 'app-newprodotto',
  templateUrl: './newprodotto.component.html',
  styleUrls: ['./newprodotto.component.css']
})
export class NewprodottoComponent {
  model:Product

  constructor(public service: ProdottoService,private router :Router){
     this.model={

      FirstName: "",
      MiddleName: "",
      LastName: "",
      Suffix: "",
      CompanyName: "",
      SalesPerson: "",
      EmailAddress: "",
      Phone: ""
     }
  }

  onSubmit(){
    this.service.postProdotti(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/admin/address');
      },
      error: (error) => {
        console.error('An error occurred:', error);

        // Accesso ai dettagli specifici dell'errore
        if (error && error.error) {
          console.log('Error details:', error.error);
        }
      }
    });
    /*
    this.nuovidati.push(this.newProduct);
    this.service.postProdotti(this.nuovidati)
    .subscribe({
      next: res => {
       // this.nuovidati = res as Product[]
       console.log("Dati caricati",res);
       this.nuovidati.push(res);
       this.newProduct = new Prodotto("","","",0,0,"",0);
      },
      error : err => {console.log(err)}

    })
  }
  */

}
}
