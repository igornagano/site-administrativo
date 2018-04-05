import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaAlterarComponent } from './empresa-alterar.component';

const routes: Routes = [
    {
        path: '', component: EmpresaAlterarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresaAlterarRoutingModule {
}
