import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTest41Component } from './variable-test41.component';

describe('VariableTest41Component', () => {
  let component: VariableTest41Component;
  let fixture: ComponentFixture<VariableTest41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableTest41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableTest41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
