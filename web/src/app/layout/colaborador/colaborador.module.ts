import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { ColaboradorComponent } from './colaborador.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { ListaColabComponent } from './lista-colab/lista-colab.component';

@NgModule({
    imports: [CommonModule, ColaboradorRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ColaboradorComponent, ListaColabComponent]
})
export class ColaboradorModule { }
