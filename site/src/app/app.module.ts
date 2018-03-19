import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioService } from './formulario.service';
import { EmpresaComponent } from './empresa/empresa.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NewCmpComponent,
    EmpresaComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormularioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
