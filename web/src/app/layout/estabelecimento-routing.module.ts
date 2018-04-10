import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstabelecimentoComponent } from './estabelecimento.component';
//import { DadosComponent } from './dados/dados.component';

const routes: Routes = [
    {
        path: '', 
        
        children: [
        	{ path: 'cadastro', loadChildren: './estabCadastro/estab-cadastro.module#EstabCadastroModule' },
            //{ path: 'dados', loadChildren: './dados/dados.module#DadosModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstabelecimentoRoutingModule { }
