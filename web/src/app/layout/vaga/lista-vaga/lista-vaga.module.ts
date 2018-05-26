import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaVagaRoutingModule } from './lista-vaga-routing.module';
import { ListaVagaComponent } from './lista-vaga.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ListaVagaRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ListaVagaComponent]
})
export class ListaVagaModule { }
