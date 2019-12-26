import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { contadorReducer } from './contador/contador.reducer';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retain 25 states
      logOnly: environment.production // Restric extension to dev environment
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
