import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaComponent } from './reserva.component';
//import { DadosColabComponent } from './dados-colab/dados-colab.component';


const routes: Routes = [
    {
        path: '', 
        
        children: [
        	//{ path: 'cadastro', loadChildren: './colab-cadastro/colab-cadastro.module#ColabCadastroModule' },
            //{ path: 'dados', loadChildren: './dados-colab/dados-colab.module#DadosColabModule' },
            //{ path: 'alterar/:id', loadChildren: './colab-altera/colab-altera.module#ColabAlteraModule' },
            { path: 'lista', loadChildren: './lista-reserva/lista-reserva.module#ListaReservaModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReservaRoutingModule { }
