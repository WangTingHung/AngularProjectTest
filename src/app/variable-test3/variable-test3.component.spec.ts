import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTest3Component } from './variable-test3.component';

describe('VariableTest3Component', () => {
  let component: VariableTest3Component;
  let fixture: ComponentFixture<VariableTest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableTest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
