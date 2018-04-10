import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabCadastroComponent } from './estab-cadastro.component';

describe('EstabCadastroComponent', () => {
  let component: EstabCadastroComponent;
  let fixture: ComponentFixture<EstabCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
