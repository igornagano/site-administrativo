import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosColabComponent } from './dados-colab.component';

describe('DadosColabComponent', () => {
  let component: DadosColabComponent;
  let fixture: ComponentFixture<DadosColabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosColabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
