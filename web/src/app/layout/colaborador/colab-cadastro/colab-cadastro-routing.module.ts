import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColabCadastroComponent } from './colab-cadastro.component';

const routes: Routes = [
    {
        path: '', component: ColabCadastroComponent
    }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ColabCadastroRoutingModule { }
