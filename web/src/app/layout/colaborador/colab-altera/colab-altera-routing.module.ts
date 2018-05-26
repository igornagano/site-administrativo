import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColabAlteraComponent } from './colab-altera.component';

const routes: Routes = [
    {
        path: '', component: ColabAlteraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColabAlteraRoutingModule { }
