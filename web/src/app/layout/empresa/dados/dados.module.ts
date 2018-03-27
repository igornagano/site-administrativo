import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './dados.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, DadosRoutingModule, PageHeaderModule, FormsModule],
    declarations: [DadosComponent]
})
export class DadosModule { }
