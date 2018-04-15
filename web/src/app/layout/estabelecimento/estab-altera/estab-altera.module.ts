import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstabAlteraRoutingModule } from './estab-altera-routing.module';
import { EstabAlteraComponent } from './estab-altera.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, EstabAlteraRoutingModule, PageHeaderModule, FormsModule],
    declarations: [EstabAlteraComponent]
})
export class EstabAlteraModule { }
