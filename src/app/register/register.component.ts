import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent {
  registro:any = {};

  constructor(private autorizacionService: AutorizacionService){
  }

  registrar(){
    this.autorizacionService.registro(this.registro.email,this.registro.password);
  }
}



