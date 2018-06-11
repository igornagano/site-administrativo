import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FuncionarioRoutingModule, PageHeaderModule, FormsModule],
    declarations: [FuncionarioComponent]
})
export class FuncionarioModule {}
