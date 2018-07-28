import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})

export class CrearComponent {
  lugar:any = [];
  id: number;
  action: string;

  constructor(private lugaresService: LugaresService,
    private route: ActivatedRoute, private _router: Router){
      this.action = this.route.snapshot.queryParams['action'];
      this.id = this.route.snapshot.params['id'];   
      console.log(this.action);
      console.log(this.id);
      if(this.action =='edit'){
        this.lugaresService.getLugar(this.id).valueChanges()
          .subscribe((lugar) => {
            this.lugar = lugar;
          });
          
          
      }
  }
 
  guardarLugar(){
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    try {
      this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result) => {
          debugger
          this.lugar.lat = result.json().results[0].geometry.location.lat;
          this.lugar.lng = result.json().results[0].geometry.location.lng;

          if(this.action =='edit'){
            this.lugaresService.editarLugar(this.lugar);  
            alert('Negocio editado con éxito!');
          }else{
            this.lugar.id = Date.now();
            this.lugaresService.guardarLugar(this.lugar);
            alert('Negocio guardado con éxito!');
          }
          this._router.navigate(['/crear','0?action=new}'] );
          this.lugar = {};
        })

    } catch (error) {
      console.log('Error:' + error);
      alert('Error al guardar los datos: ' + error);
    }

  }
}



