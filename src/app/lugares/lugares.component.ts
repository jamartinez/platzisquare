import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
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
      .valueChanges().subscribe(lugares => {
        //debugger;
        //console.log(lugares);
        this.lugares = lugares;
      })
      
  }
}



