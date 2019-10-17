import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRegionComponent } from './test-region.component';

describe('TestRegionComponent', () => {
  let component: TestRegionComponent;
  let fixture: ComponentFixture<TestRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
