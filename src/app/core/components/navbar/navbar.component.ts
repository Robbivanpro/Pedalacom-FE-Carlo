import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

    eseguiAzione():void {
      console.log('Navigazione verso il carrello eseguita');

      this.router.navigate(['/carrello']);
  }

  eseguiAzioneS():void {
    console.log('Navigazione verso lo shop eseguita');

    this.router.navigate(['/shop']);
}

 eseguiAzioneP():void{
  console.log('Navigazione riuscita')

  this.router.navigate(['/clienti'])
 }

}
