import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesReservaComponent } from './detalhes-reserva.component';

const routes: Routes = [
    {
        path: '', component: DetalhesReservaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetalhesReservaRoutingModule { }
