import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTest42Component } from './variable-test42.component';

describe('VariableTest42Component', () => {
  let component: VariableTest42Component;
  let fixture: ComponentFixture<VariableTest42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableTest42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableTest42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
