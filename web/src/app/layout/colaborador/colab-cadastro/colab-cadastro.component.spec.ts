import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabCadastroComponent } from './colab-cadastro.component';

describe('ColabCadastroComponent', () => {
  let component: ColabCadastroComponent;
  let fixture: ComponentFixture<ColabCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
