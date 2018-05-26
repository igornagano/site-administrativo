import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagaAlteraRoutingModule } from './vaga-altera-routing.module';
import { VagaAlteraComponent } from './vaga-altera.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, VagaAlteraRoutingModule, PageHeaderModule, FormsModule],
    declarations: [VagaAlteraComponent]
})
export class VagaAlteraModule { }
