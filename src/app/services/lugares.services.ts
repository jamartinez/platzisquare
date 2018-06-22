import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Http } from "@angular/http";

@Injectable()

export class LugaresService{
    lugares:any = [
        {id: 1,plan: 'pagado',    cercania:1, distancia: 1,   active: true,   nombre:'Florería la Gardenia', descripcion: 'La información de local no se encuentra disponible. En breve corregiremos este inconveniente.'},
        {id: 2,plan: 'gratuito',  cercania:1, distancia: 1.8, active: true,   nombre:'Donas las pasaditas', descripcion: 'La información de local no se encuentra disponible. En breve corregiremos este inconveniente.'},
        {id: 3,plan: 'gratuito',  cercania:2, distancia: 5,   active: true,   nombre:'Veterinaria huellitas felices', descripcion: 'La información de local no se encuentra disponible. En breve corregiremos este inconveniente.'},
        {id: 4,plan: 'gratuito',  cercania:3, distancia: 10,  active: false,  nombre:'Sushi Sushiroll', descripcion: 'La información de local no se encuentra disponible. En breve corregiremos este inconveniente.'},
        {id: 5,plan: 'pagado',    cercania:3, distancia: 35,  active: true,   nombre:'Hotel la Gracia', descripcion: 'La información de local no se encuentra disponible. En breve corregiremos este inconveniente.'},
        {id: 6,plan: 'gratuito',  cercania:3, distancia: 120, active: false,  nombre:'Zapatería el Clavo', descripcion: 'La información de local no se encuentra disponible. En breve corregiremos este inconveniente.'},
    ];
    
   constructor(private afDB: AngularFireDatabase, private http: Http){
    }
    public getLugares(){
        return this.afDB.list('lugares/');
    }
    
    public buscarLugar(id: number){
        return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
    }
    
    public guardarLugar(lugar:any){
        console.log(lugar);
        this.afDB.database.ref('lugares/' + lugar.id ).set(lugar);
    }
    
    public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);

    }
}