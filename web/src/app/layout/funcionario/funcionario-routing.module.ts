import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';

const routes: Routes = [
    {
        path: '', 
        //component: EmpresaComponent,
        children: [
        	{ path: 'cadastro', loadChildren: './cadastro/cadastro.module#cadastroModule' },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FuncionarioRoutingModule {
}
