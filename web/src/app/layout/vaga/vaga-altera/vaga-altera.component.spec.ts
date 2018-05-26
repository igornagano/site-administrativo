import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaAlteraComponent } from './vaga-altera.component';

describe('VagaAlteraComponent', () => {
  let component: VagaAlteraComponent;
  let fixture: ComponentFixture<VagaAlteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaAlteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
