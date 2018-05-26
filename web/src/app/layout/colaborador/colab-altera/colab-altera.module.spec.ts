import { ColabAlteraModule } from './colab-altera.module';

describe('ColabAlteraModule', () => {
  let colabAlteraModule: ColabAlteraModule;

  beforeEach(() => {
    colabAlteraModule = new ColabAlteraModule();
  });

  it('should create an instance', () => {
    expect(colabAlteraModule).toBeTruthy();
  });
});
