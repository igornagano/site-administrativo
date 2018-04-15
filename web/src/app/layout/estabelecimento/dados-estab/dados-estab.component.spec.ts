import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEstabComponent } from './dados-estab.component';

describe('DadosEstabComponent', () => {
  let component: DadosEstabComponent;
  let fixture: ComponentFixture<DadosEstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosEstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
