import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosVagaComponent } from './dados-vaga.component';

const routes: Routes = [
    {
        path: '', component: DadosVagaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DadosVagaRoutingModule { }
