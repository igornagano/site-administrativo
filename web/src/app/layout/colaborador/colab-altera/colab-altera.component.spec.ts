import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabAlteraComponent } from './colab-altera.component';

describe('ColabAlteraComponent', () => {
  let component: ColabAlteraComponent;
  let fixture: ComponentFixture<ColabAlteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabAlteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
