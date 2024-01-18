import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../service/prodotto.service';
import { Prodotto } from '../model/prodotto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sproduct',
  templateUrl: './sproduct.component.html',
  styleUrls: ['./sproduct.component.css']
})
export class SproductComponent implements OnInit {
   responsedata :any;
  constructor(private requestservice : ProdottoService,private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
   // this.requestservice.RichiestaGet();
    //controllare la policy nel back-end
    this.route.params.subscribe(params => {
     const productId = +params['id'];

    this.requestservice.getProductById(productId).subscribe(
      (response: any) => {
        console.log(response);
        this.responsedata = response; // Assegna il prodotto ottenuto dalla risposta dell'API
      },
      (error: any) => {
        console.error('Errore durante il recupero dei dettagli del prodotto:', error);
      }
    );

  });
}

  OnDelete(id: number){
    this.requestservice.onDelete(id)
    .subscribe({
      next: res =>{
        this.requestservice.list = res as Prodotto[]
      }
    })
  }



 /*var MainImg = document.getElementById("MainImg");
  var smallImg = document.getElementsByClassName("small-img");

  smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].src;
  }
  smallImg[1].onclick = function() {
    MainImg.src = smallImg[1].scroll;
  }
  smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].scroll;
  }
  smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].scroll;
  }
*/
}
