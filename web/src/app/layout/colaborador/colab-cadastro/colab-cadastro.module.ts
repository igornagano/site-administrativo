import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColabCadastroRoutingModule } from './colab-cadastro-routing.module';
import { ColabCadastroComponent } from './colab-cadastro.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ColabCadastroRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ColabCadastroComponent]
})
export class ColabCadastroModule { }
