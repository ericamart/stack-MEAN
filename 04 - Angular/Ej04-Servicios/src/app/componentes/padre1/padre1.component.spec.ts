import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Padre1Component } from './padre1.component';

describe('Padre1Component', () => {
  let component: Padre1Component;
  let fixture: ComponentFixture<Padre1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Padre1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Padre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
