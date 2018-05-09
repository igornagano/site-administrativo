import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColabComponent } from './lista-colab.component';

describe('ListaColabComponent', () => {
  let component: ListaColabComponent;
  let fixture: ComponentFixture<ListaColabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaColabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
