import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagaRoutingModule} from './vaga-routing.module';
import { VagaComponent } from './vaga.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [CommonModule, VagaRoutingModule, PageHeaderModule, FormsModule],
    declarations: [VagaComponent]
})
export class VagaModule { }
