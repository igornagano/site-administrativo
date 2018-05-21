import { VagaModule } from './vaga.module';

describe('VagaModule', () => {
  let vagaModule: VagaModule;

  beforeEach(() => {
    vagaModule = new VagaModule();
  });

  it('should create an instance', () => {
    expect(vagaModule).toBeTruthy();
  });
});
