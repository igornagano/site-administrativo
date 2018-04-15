import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEstabRoutingModule } from './lista-estab-routing.module';
import { ListaEstabComponent } from './lista-estab.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ListaEstabRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ListaEstabComponent]
})
export class ListaEstabModule { }
