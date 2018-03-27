import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, EmpresaRoutingModule, PageHeaderModule, FormsModule],
    declarations: [EmpresaComponent]
})
export class EmpresaModule {}
