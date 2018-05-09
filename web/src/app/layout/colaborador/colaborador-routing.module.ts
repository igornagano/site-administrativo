import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradorComponent } from './colaborador.component';


const routes: Routes = [
    {
        path: '', 
        
        children: [
        	{ path: 'cadastro', loadChildren: './colab-cadastro/colab-cadastro.module#ColabCadastroModule' },
            { path: 'dados', loadChildren: './dados-colab/dados-colab.module#DadosColabModule' },
            //{ path: 'alterar/:id', loadChildren: './colab-altera/colab-altera.module#EstabAlteraModule' },
            { path: 'lista', loadChildren: './lista-colab/lista-colab.module#ListaColabModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
