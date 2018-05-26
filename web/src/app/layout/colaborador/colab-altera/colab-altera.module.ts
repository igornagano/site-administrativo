import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColabAlteraRoutingModule } from './colab-altera-routing.module';
import { ColabAlteraComponent } from './colab-altera.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ColabAlteraRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ColabAlteraComponent]
})
export class ColabAlteraModule { }
