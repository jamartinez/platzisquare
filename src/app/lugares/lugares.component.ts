import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.services';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})

export class LugaresComponent {
  title:string = 'PlatziSquare';
  lat:number=8.9856285;
  lng:number=-79.5124686;
  lugares: any = null;

  constructor(private lugaresService: LugaresService){
    //this.lugares = lugaresService.getLugares();
    lugaresService.getLugares()
      //.valueChanges()
      .subscribe(lugares => {
        //console.log(lugares);
        //debugger;
        var me = this;
        me.lugares = lugares;
        me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });
      },error => {
        console.log('Error en getLugares: ' + error);
        alert('Existen inconvenientes para cargar los datos, disculpe las molestias. Error: ' + error.statusText);
      });
      
  }
}



