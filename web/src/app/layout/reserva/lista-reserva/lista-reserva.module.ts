import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaReservaRoutingModule } from './lista-reserva-routing.module';
import { ListaReservaComponent } from './lista-reserva.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ListaReservaRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ListaReservaComponent]
})
export class ListaReservaModule { }
