import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEstabComponent } from './lista-estab.component';

const routes: Routes = [
    {
        path: '', component: ListaEstabComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaEstabRoutingModule { }
