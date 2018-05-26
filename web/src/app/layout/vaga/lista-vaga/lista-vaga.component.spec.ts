import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVagaComponent } from './lista-vaga.component';

describe('ListaVagaComponent', () => {
  let component: ListaVagaComponent;
  let fixture: ComponentFixture<ListaVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
