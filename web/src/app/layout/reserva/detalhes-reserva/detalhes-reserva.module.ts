import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhesReservaRoutingModule } from './detalhes-reserva-routing.module';
import { DetalhesReservaComponent } from './detalhes-reserva.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, DetalhesReservaRoutingModule, PageHeaderModule, FormsModule],
    declarations: [DetalhesReservaComponent]
})
export class DetalhesReservaModule { }
