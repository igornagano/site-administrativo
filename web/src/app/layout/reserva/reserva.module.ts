import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './reserva.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReservaRoutingModule, PageHeaderModule, FormsModule],
    declarations: [ReservaComponent]
})
export class ReservaModule { }
