import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComDemoComponent } from './child-com-demo.component';

describe('ChildComDemoComponent', () => {
  let component: ChildComDemoComponent;
  let fixture: ComponentFixture<ChildComDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
