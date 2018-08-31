import { Component  } from '@angular/core';
import { LugaresService } from '../services/lugares.services';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable',[
      state('inicial',style({
        opacity:0
      })),
      state('final',style({
        opacity:1
      })),
      transition('inicial => final',animate(2000)),
      transition('final => inicial',animate(1000)),
    ])
  ]

})

export class LugaresComponent {
  title:string = 'PlatziSquare';
  lat:number=8.9856285;
  lng:number=-79.5124686;
  lugares: any = null;
  state = 'inicial';

  animar(){
    this.state = (this.state === 'final')? 'inicial': 'final';
  }
  
  animacionInicia(e){
    console.log('Inicia la animación: ' + e);
  }

  animacionTermina(e){
    console.log('Termina la animación: ' + e);
  }

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
        this.state='final';
        
      },error => {
        if (error.statusText != 'Unauthorized') {
          alert('Existen inconvenientes para cargar los datos, disculpe las molestias. Error: ' + error.statusText);
        }
        console.log('Error en getLugares: ' + error);

      });
      
  }
}



