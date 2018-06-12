import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent {
  lugares:any = [
    {id: 1,plan: 'pagado',    cercania:1, distancia: 1,   active: true,   nombre:'Florería la Gardenia', descripcion: 'Descripción de este negocio. Luego más info.'},
    {id: 2,plan: 'gratuito',  cercania:1, distancia: 1.8, active: true,   nombre:'Donas las pasaditas', descripcion: 'Descripción de este negocio. Luego más info.'},
    {id: 3,plan: 'gratuito',  cercania:2, distancia: 5,   active: true,   nombre:'Veterinaria Huellitas Felices', descripcion: 'Descripción de este negocio. Luego más info.'},
    {id: 4,plan: 'gratuito',  cercania:3, distancia: 10,  active: false,  nombre:'Sushi Sushiroll', descripcion: 'Descripción de este negocio. Luego más info.'},
    {id: 5,plan: 'pagado',    cercania:3, distancia: 35,  active: true,   nombre:'Hotel la Gracia', descripcion: 'Descripción de este negocio. Luego más info.'},
    {id: 6,plan: 'gratuito',  cercania:3, distancia: 120, active: false,  nombre:'Zapatería el Clavo', descripcion: 'Descripción de este negocio. Luego más info.'},
  ];
  id = null;
  lugar:any = {};
  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
    //console.log(this.route.queryParams);
    //console.log(this.route.queryParams['action']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }
  buscarLugar(){
    return this.lugares.filter((lugar) => {return lugar.id == this.id})[0] || null;

  }

}



