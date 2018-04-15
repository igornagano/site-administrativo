import { EstabAlteraModule } from './estab-altera.module';

describe('EstabAlteraModule', () => {
  let estabAlteraModule: EstabAlteraModule;

  beforeEach(() => {
    estabAlteraModule = new EstabAlteraModule();
  });

  it('should create an instance', () => {
    expect(estabAlteraModule).toBeTruthy();
  });
});
