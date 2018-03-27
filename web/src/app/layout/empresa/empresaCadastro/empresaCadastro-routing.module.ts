import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaCadastroComponent } from './empresaCadastro.component';

const routes: Routes = [
    {
        path: '', component: EmpresaCadastroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresaCadastroRoutingModule {
}
