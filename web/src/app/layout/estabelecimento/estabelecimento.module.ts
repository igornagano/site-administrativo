import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstabelecimentoRoutingModule} from './estabelecimento-routing.module';
import { EstabelecimentoComponent } from './estabelecimento.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, EstabelecimentoRoutingModule, PageHeaderModule, FormsModule],
    declarations: [EstabelecimentoComponent]
})
export class EstabelecimentoModule { }
