import { DadosColabModule } from './dados-colab.module';

describe('DadosColabModule', () => {
  let dadosColabModule: DadosColabModule;

  beforeEach(() => {
    dadosColabModule = new DadosColabModule();
  });

  it('should create an instance', () => {
    expect(dadosColabModule).toBeTruthy();
  });
});
