import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaAlterarRoutingModule } from './empresa-alterar-routing.module';
import { EmpresaAlterarComponent } from './empresa-alterar.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, EmpresaAlterarRoutingModule, PageHeaderModule, FormsModule],
    declarations: [EmpresaAlterarComponent]
})
export class EmpresaAlterarModule {}
