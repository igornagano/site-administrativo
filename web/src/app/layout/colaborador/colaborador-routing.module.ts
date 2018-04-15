import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorComponent } from './colaborador.component';


const routes: Routes = [
    {
        path: '', 
        
        children: [
        	{ path: 'cadastro', loadChildren: './colab-cadastro/colab-cadastro.module#ColabCadastroModule' },
            { path: 'dados', loadChildren: './dados-colab/dados-colab.module#DadosColabModule' },
            //{ path: 'alterar/:id', loadChildren: './estab-altera/estab-altera.module#EstabAlteraModule' },
            //{ path: 'lista', loadChildren: './lista-estab/lista-estab.module#ListaEstabModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
