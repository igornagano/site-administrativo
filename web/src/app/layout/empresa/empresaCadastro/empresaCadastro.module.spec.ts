import { EmpresaCadastroModule } from './empresaCadastro.module';

describe('EmpresaCadastroModule', () => {
    let empresaCadastroModule: EmpresaCadastroModule;

    beforeEach(() => {
        empresaCadastroModule = new EmpresaCadastroModule();
    });

    it('should create an instance', () => {
        expect(empresaCadastroModule).toBeTruthy();
    });
});
