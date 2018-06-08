import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})

export class LugaresComponent {
  title:string = 'PlatziSquare';
  lugares:any = [
    {id: 1,plan: 'pagado',    cercania:1, distancia: 1,   active: true,   nombre:'Florería la Gardenia'},
    {id: 2,plan: 'gratuito',  cercania:1, distancia: 1.8, active: true,   nombre:'Donas las pasaditas'},
    {id: 3,plan: 'gratuito',  cercania:2, distancia: 5,   active: true,   nombre:'Veterinaria huellitas felices'},
    {id: 4,plan: 'gratuito',  cercania:3, distancia: 10,  active: false,  nombre:'Sushi Sushiroll'},
    {id: 5,plan: 'pagado',    cercania:3, distancia: 35,  active: true,   nombre:'Hotel la Gracia'},
    {id: 6,plan: 'gratuito',  cercania:3, distancia: 120, active: false,  nombre:'Zapatería el Clavo'},
  ];
  lat:number=8.9856285;
  lng:number=-79.5124686;
  constructor(){
    
  }
}



