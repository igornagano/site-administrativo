import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagaComponent } from './vaga.component';
import { DadosVagaComponent } from './dados-vaga/dados-vaga.component';

const routes: Routes = [
    {
        path: '', 
        
        children: [
        	{ path: 'cadastro', loadChildren: './vaga-cadastro/vaga-cadastro.module#VagaCadastroModule' },
            { path: 'dados', loadChildren: './dados-vaga/dados-vaga.module#DadosVagaModule' },
            { path: 'alterar/:id', loadChildren: './vaga-altera/vaga-altera.module#VagaAlteraModule' },
            { path: 'lista', loadChildren: './lista-vaga/lista-vaga.module#ListaVagaModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VagaRoutingModule { }
