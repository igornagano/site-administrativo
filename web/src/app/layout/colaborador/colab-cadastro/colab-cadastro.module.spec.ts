import { ColabCadastroModule } from './colab-cadastro.module';

describe('ColabCadastroModule', () => {
  let colabCadastroModule: ColabCadastroModule;

  beforeEach(() => {
    colabCadastroModule = new ColabCadastroModule();
  });

  it('should create an instance', () => {
    expect(colabCadastroModule).toBeTruthy();
  });
});
