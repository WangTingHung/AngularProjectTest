import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnChangeChildComponent } from './test-on-change-child.component';

describe('TestOnChangeChildComponent', () => {
  let component: TestOnChangeChildComponent;
  let fixture: ComponentFixture<TestOnChangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOnChangeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
