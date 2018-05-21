import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaCadastroComponent } from './vaga-cadastro.component';

describe('VagaCadastroComponent', () => {
  let component: VagaCadastroComponent;
  let fixture: ComponentFixture<VagaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
