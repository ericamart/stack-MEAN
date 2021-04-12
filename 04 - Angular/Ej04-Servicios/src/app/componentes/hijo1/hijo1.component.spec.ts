import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo1Component } from './hijo1.component';

describe('Hijo1Component', () => {
  let component: Hijo1Component;
  let fixture: ComponentFixture<Hijo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
