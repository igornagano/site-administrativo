import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabAlteraComponent } from './estab-altera.component';

describe('EstabAlteraComponent', () => {
  let component: EstabAlteraComponent;
  let fixture: ComponentFixture<EstabAlteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabAlteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
