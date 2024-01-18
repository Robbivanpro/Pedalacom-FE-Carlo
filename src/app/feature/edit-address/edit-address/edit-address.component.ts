import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { UpdateAddressRequest } from 'src/app/models/edit-address-request.model';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit, OnDestroy {
  

  id:string | null = null;
  paramsSubscription?:Subscription;
  editAddressSubscription?:Subscription;
  address?:Address;
  

  constructor (private route:ActivatedRoute, private addressService:AddressService, private router:Router){  

  }
  ngOnInit(): void {
   
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params)=>{
        this.id = params.get('id');
        if(this.id){
          this.addressService.getAddressByID(this.id)
          .subscribe({
            next:(response)=>{
              this.address = response;
            }
          })
        }
      }
      
    })
  }

 /* onFormSubmit():void{
    const updateAddressRequest :UpdateAddressRequest = {

      addressLine1 : this.address?.productId?? '',
      addressLine2:this.address?.addressLine2??'',
      city:this.address?.city??'',
      stateProvince:this.address?.stateProvince??'',
      countryRegion:this.address?.countryRegion??'',
      postalCode:this.address?.postalCode??'',


    };
    

    if(this.id){
      this.editAddressSubscription = this.addressService.updateAddressRequest(this.id, updateAddressRequest)
      .subscribe({
        next:()=>{
          this.router.navigateByUrl('/admin/address');
        }

  })
    }
  }
  */

   onFormSubmit ():void{
     console.log(this.address)
   }

  
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();

    if (this.editAddressSubscription) {
      this.editAddressSubscription.unsubscribe();
  }
}
  
}

