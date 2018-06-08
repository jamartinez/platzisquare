import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AppResaltarDirective } from './directives/resaltar.directive';
import { AppContarClicksDirective } from './directives/app.contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { LugaresComponent } from './lugares/lugares.component';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalles/:id', component: DetallesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppResaltarDirective,
    AppContarClicksDirective,
    DetallesComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWtfHIaxmVFz5KjWRNUflBCAmoQVsX0QU'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
