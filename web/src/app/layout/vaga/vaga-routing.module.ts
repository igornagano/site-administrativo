import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagaComponent } from './vaga.component';
//import { DadosEstabComponent } from './dados-estab/dados-estab.component';

const routes: Routes = [
    {
        path: '', 
        
        children: [
        	{ path: 'cadastro', loadChildren: './vaga-cadastro/vaga-cadastro.module#VagaCadastroModule' },
            //{ path: 'dados', loadChildren: './dados-estab/dados-estab.module#DadosEstabModule' },
            //{ path: 'alterar/:id', loadChildren: './estab-altera/estab-altera.module#EstabAlteraModule' },
            //{ path: 'lista', loadChildren: './lista-estab/lista-estab.module#ListaEstabModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VagaRoutingModule { }
