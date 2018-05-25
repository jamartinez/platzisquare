import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AppResaltarDirective } from './directives/resaltar.directive';
import { AppContarClicksDirective } from './directives/app.contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppResaltarDirective,
    AppContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWtfHIaxmVFz5KjWRNUflBCAmoQVsX0QU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
