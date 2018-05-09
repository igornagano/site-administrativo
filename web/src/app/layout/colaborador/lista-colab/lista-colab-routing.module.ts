import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaColabComponent } from './lista-colab.component';

const routes: Routes = [
    {
        path: '', component: ListaColabComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaColabRoutingModule { }
