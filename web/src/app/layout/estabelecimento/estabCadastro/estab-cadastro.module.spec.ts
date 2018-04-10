import { EstabCadastroModule } from './estab-cadastro.module';

describe('EstabCadastroModule', () => {
    let estabCadastroModule: EstabCadastroModule;

    beforeEach(() => {
        estabCadastroModule = new EstabCadastroModule();
    });

    it('should create an instance', () => {
        expect(estabCadastroModule).toBeTruthy();
    });
});
