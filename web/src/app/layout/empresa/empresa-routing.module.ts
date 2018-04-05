import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa.component';

const routes: Routes = [
    {
        path: '', 
        //component: EmpresaComponent,
        children: [
        	{ path: 'cadastro', loadChildren: './empresaCadastro/empresaCadastro.module#EmpresaCadastroModule' },
            { path: 'dados', loadChildren: './dados/dados.module#DadosModule' },
            { path: 'alterar/:id', loadChildren: './empresa-alterar/empresa-alterar.module#EmpresaAlterarModule' },
            { path: 'lista', loadChildren: './lista/lista.module#ListaModule' },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresaRoutingModule {
}
