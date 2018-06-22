//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
//USER COMPONENTS
import { AppResaltarDirective } from './directives/resaltar.directive';
import { AppContarClicksDirective } from './directives/app.contar-clicks.directive';
import { DetallesComponent } from './detalles/detalles.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.services';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AppResaltarDirective,
    AppContarClicksDirective,
    DetallesComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWtfHIaxmVFz5KjWRNUflBCAmoQVsX0QU'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule,
    HttpModule   
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
