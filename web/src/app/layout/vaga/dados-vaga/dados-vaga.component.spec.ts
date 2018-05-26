import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosVagaComponent } from './dados-vaga.component';

describe('DadosVagaComponent', () => {
  let component: DadosVagaComponent;
  let fixture: ComponentFixture<DadosVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
