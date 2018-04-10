import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstabCadastroComponent } from './estab-cadastro.component';

const routes: Routes = [
    {
        path: '', component: EstabCadastroComponent
    }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstabCadastroRoutingModule { }
