import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagaCadastroComponent } from './vaga-cadastro.component';

const routes: Routes = [
    {
        path: '', component: VagaCadastroComponent
    }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class VagaCadastroRoutingModule { }
