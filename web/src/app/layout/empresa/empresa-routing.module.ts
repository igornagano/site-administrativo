import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa.component';
import { DadosComponent } from './dados/dados.component';

const routes: Routes = [
    {
        path: '', 
        //component: EmpresaComponent,
        children: [
        	{ path: 'cadastro', loadChildren: './empresaCadastro/empresaCadastro.module#EmpresaCadastroModule' },
            { path: 'dados', loadChildren: './dados/dados.module#DadosModule' },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresaRoutingModule {
}
