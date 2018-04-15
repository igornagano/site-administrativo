import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosEstabComponent } from './dados-estab.component';

const routes: Routes = [
    {
        path: '', component: DadosEstabComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DadosEstabRoutingModule { }
