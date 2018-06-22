import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.services';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent {
  id = null;
  lugar:any = {};
  constructor(private route: ActivatedRoute, private lugaresService: LugaresService){
    console.log(this.route.snapshot.params['id']);
    //console.log(this.route.queryParams);
    //console.log(this.route.queryParams['action']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }

}



