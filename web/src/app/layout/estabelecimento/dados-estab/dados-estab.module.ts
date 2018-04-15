import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosEstabRoutingModule } from './dados-estab-routing.module';
import { DadosEstabComponent } from './dados-estab.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, DadosEstabRoutingModule, PageHeaderModule, FormsModule],
    declarations: [DadosEstabComponent]
})
export class DadosEstabModule { }
