import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagaAlteraComponent } from './vaga-altera.component';

const routes: Routes = [
    {
        path: '', component: VagaAlteraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VagaAlteraRoutingModule { }
