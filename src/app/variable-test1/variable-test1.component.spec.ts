import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTest1Component } from './variable-test1.component';

describe('VariableTest1Component', () => {
  let component: VariableTest1Component;
  let fixture: ComponentFixture<VariableTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
