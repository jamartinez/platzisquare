import { Injectable } from "../../../node_modules/@angular/core";
import { AngularFireAuth } from "../../../node_modules/angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()

export class AutorizacionService{
    public id_token: string;

    constructor(private AngularFireAuth: AngularFireAuth){
        this.isLogged();
    }
    public facebookLogin(){
        this.AngularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((result) => {
                console.log(result);
                alert('Usuario logueado con Facebook!');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    public login = (email,password) => {
        console.log('Metodo de login!');
        this.AngularFireAuth.auth.signInWithEmailAndPassword(email,password)
            .then((response) => {
                    alert('Usuario logueado con exito!');
                    this.id_token = response.G

                    console.log(this.id_token);
            })
            .catch((error) => {
                alert('Ocurrio un acceder el usuario');
                console.log(error)
            });
    }

    public registro = (email,password) => {
        console.log('Metodo de registro!');
        this.AngularFireAuth.auth.createUserWithEmailAndPassword(email,password)
            .then((response) => {
                    alert('Usuario registrado con exito!');
                    console.log(response);
            })
            .catch((error) => {
                alert('Ocurrio un error en el registo');
                console.log(error)
            });
    }
    public isLogged(){
        return this.AngularFireAuth.authState;
    }

} 