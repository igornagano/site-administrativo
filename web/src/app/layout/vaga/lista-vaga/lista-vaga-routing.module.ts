import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVagaComponent } from './lista-vaga.component';

const routes: Routes = [
    {
        path: '', component: ListaVagaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaVagaRoutingModule { }
