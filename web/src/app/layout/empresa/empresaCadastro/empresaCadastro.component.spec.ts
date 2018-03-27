import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCadastroComponent } from './empresaCadastro.component';

describe('EmpresaCadastroComponent', () => {
  let component: EmpresaCadastroComponent;
  let fixture: ComponentFixture<EmpresaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
