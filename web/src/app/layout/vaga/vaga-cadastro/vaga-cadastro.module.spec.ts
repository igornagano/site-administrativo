import { VagaCadastroModule } from './vaga-cadastro.module';

describe('VagaCadastroModule', () => {
  let vagaCadastroModule: VagaCadastroModule;

  beforeEach(() => {
    vagaCadastroModule = new VagaCadastroModule();
  });

  it('should create an instance', () => {
    expect(vagaCadastroModule).toBeTruthy();
  });
});
