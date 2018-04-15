import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosColabRoutingModule } from './dados-colab-routing.module';
import { DadosColabComponent } from './dados-colab.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, DadosColabRoutingModule, PageHeaderModule, FormsModule],
    declarations: [DadosColabComponent]
})
export class DadosColabModule { }
