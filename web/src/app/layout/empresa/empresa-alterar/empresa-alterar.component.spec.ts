import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaAlterarComponent } from './empresa-alterar.component';

describe('EmpresaAlterarComponent', () => {
  let component: EmpresaAlterarComponent;
  let fixture: ComponentFixture<EmpresaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
