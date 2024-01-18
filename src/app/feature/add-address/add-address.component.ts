import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddAddressRequest } from 'src/app/models/add-address-request.model';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {

  model:AddAddressRequest;
  

  constructor(private addressService:AddressService, private router:Router){
    this.model={
      
      addressLine1:'',
      addressLine2:'',
      city:'',
      stateProvince:'',
      countryRegion:'',
      postalCode:'',
    }
    
  }

  onFormSubmit(){
    this.addressService.addAddress(this.model).subscribe({
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
    
  }}
