import { VagaAlteraModule } from './vaga-altera.module';

describe('VagaAlteraModule', () => {
  let vagaAlteraModule: VagaAlteraModule;

  beforeEach(() => {
    vagaAlteraModule = new VagaAlteraModule();
  });

  it('should create an instance', () => {
    expect(vagaAlteraModule).toBeTruthy();
  });
});
