import { ColaboradorModule } from './colaborador.module';

describe('ColaboradorModule', () => {
  let colaboradorModule: ColaboradorModule;

  beforeEach(() => {
    colaboradorModule = new ColaboradorModule();
  });

  it('should create an instance', () => {
    expect(colaboradorModule).toBeTruthy();
  });
});
