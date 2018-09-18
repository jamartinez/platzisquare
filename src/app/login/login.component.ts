import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  loginParam:any = {};
  constructor(private autorizacionService: AutorizacionService){
  }

  login(){
    this.autorizacionService.login(this.loginParam.email,this.loginParam.password);
  }
  fecebookLogin(){
    this.autorizacionService.facebookLogin();
  }

}




