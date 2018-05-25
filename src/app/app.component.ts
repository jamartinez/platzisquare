import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'PlatziSquare';
  lugares:any = [
    {plan: 'pagado',    cercania:1, distancia: 1,   active: true,   nombre:'Florería la Gardenia'},
    {plan: 'gratuito',  cercania:1, distancia: 1.8, active: true,   nombre:'Donas las pasaditas'},
    {plan: 'gratuito',  cercania:2, distancia: 5,   active: true,   nombre:'Veterinaria huellitas felices'},
    {plan: 'gratuito',  cercania:3, distancia: 10,  active: false,  nombre:'Sushi Sushiroll'},
    {plan: 'pagado',    cercania:3, distancia: 35,  active: true,   nombre:'Hotel la Gracia'},
    {plan: 'gratuito',  cercania:3, distancia: 120, active: false,  nombre:'Zapatería el Clavo'},
  ];
  lat:number=8.9856285;
  lng:number=-79.5124686;
  constructor(){
    
  }


}
