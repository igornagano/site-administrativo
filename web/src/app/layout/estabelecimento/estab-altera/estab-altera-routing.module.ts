import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstabAlteraComponent } from './estab-altera.component';

const routes: Routes = [
    {
        path: '', component: EstabAlteraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstabAlteraRoutingModule { }
