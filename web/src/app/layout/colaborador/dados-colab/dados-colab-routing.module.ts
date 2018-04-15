import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosColabComponent } from './dados-colab.component';

const routes: Routes = [
    {
        path: '', component: DadosColabComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DadosColabRoutingModule { }
