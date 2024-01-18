import { Injectable } from '@angular/core';
import { AddAddressComponent } from '../feature/add-address/add-address.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddAddressRequest } from '../models/add-address-request.model';
import { Address } from '../models/address.model';
import { UpdateAddressRequest } from 'src/app/models/edit-address-request.model';



@Injectable({
  providedIn: 'root'
})
export class AddressService {

  list: Address[]=[]
  constructor(private http: HttpClient) { }

  RichiestaGet(): void{
   this.http.get('https://localhost:44322/api/Addresses').subscribe({
    next: res => {
      this.list = res as Address[];
    },
    error: err => { console.log(err)}

   })

  }

  addAddress(model: AddAddressRequest): Observable<any> {
    return this.http.post<any>('https://localhost:44322/api/Addresses', model);
  }

  getAllAddresses(): Observable<Address[]>{
    return this.http.get<Address[]>('https://localhost:44322/api/Addresses');
  }

  getAddressByID(id: string): Observable<Address> {
    return this.http.get<Address>(`https://localhost:44322/api/Addresses/${id}`);
}


updateAddressRequest(id:string, updateAddressRequest:UpdateAddressRequest):Observable<Address>{
  return this.http.put<Address>(`https://localhost:44374/api/address/${id}`, updateAddressRequest);
}

onDelete(id:number){
  return this.http.delete(`https://localhost:44322/api/Addresses/${id}`)
 }


}
