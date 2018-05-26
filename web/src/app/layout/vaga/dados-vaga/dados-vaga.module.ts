import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosVagaRoutingModule } from './dados-vaga-routing.module';
import { DadosVagaComponent } from './dados-vaga.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, DadosVagaRoutingModule, PageHeaderModule, FormsModule],
    declarations: [DadosVagaComponent]
})
export class DadosVagaModule { }
