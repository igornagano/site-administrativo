import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagaCadastroRoutingModule } from './vaga-cadastro-routing.module';
import { VagaCadastroComponent } from './vaga-cadastro.component';
import { PageHeaderModule } from './../../../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, VagaCadastroRoutingModule, PageHeaderModule, FormsModule],
    declarations: [VagaCadastroComponent]
})
export class VagaCadastroModule { }
