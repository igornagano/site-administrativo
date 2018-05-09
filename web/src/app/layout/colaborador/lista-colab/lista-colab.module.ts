import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaColabRoutingModule } from './lista-colab-routing.module';
import { ListaColabComponent } from './lista-colab.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ListaColabRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ListaColabComponent]
})
export class ListaColabModule { }
