import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildServiceComComponent } from './child-service-com.component';

describe('ChildServiceComComponent', () => {
  let component: ChildServiceComComponent;
  let fixture: ComponentFixture<ChildServiceComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildServiceComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildServiceComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
