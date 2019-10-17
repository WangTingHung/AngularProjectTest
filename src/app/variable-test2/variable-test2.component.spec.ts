import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTest2Component } from './variable-test2.component';

describe('VariableTest2Component', () => {
  let component: VariableTest2Component;
  let fixture: ComponentFixture<VariableTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
