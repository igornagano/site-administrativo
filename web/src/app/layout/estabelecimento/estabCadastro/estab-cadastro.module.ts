import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstabCadastroRoutingModule } from './estab-cadastro-routing.module';
import { EstabCadastroComponent } from './estab-cadastro.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, EstabCadastroRoutingModule, PageHeaderModule, FormsModule],
    declarations: [EstabCadastroComponent]
})
export class EstabCadastroModule { }
