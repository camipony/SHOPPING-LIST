import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title:string = 'Shopping List';

  employees = [
    {'name': 'Cami'  , position: 'manageer'},
    {'name': 'Flako'  , position: 'Dealer'},
    {'name': 'Sam'  , position: 'bb'}
  ];

  /*Un modelo en angular es una clase que representa un objeto con propiedades
  que permite la utilización de la misma desde clases externas, evitando la reiteración de código.
  A lo largo de esta entrada veremos cómo construir un modelo y cómo implementarla en componentes.*/
   model:any = {

  };

  

  addEmployeed(): void{

  }

  deleteEmployeed(): void{

  }

  editEmployeed():void{

  }

  updateEmployeed():void{

  }
}
