import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioService } from './formulario.service'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NewCmpComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FormularioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
