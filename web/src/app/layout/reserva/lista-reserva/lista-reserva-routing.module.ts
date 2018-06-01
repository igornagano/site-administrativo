import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaReservaComponent } from './lista-reserva.component';

const routes: Routes = [
    {
        path: '', component: ListaReservaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaReservaRoutingModule { }
