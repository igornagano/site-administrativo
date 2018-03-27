import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaCadastroRoutingModule } from './empresaCadastro-routing.module';
import { EmpresaCadastroComponent } from './empresaCadastro.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, EmpresaCadastroRoutingModule, PageHeaderModule, FormsModule],
    declarations: [EmpresaCadastroComponent]
})
export class EmpresaCadastroModule {}
