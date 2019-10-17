import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherServiceChildComponent } from './father-service-child.component';

describe('FatherServiceChildComponent', () => {
  let component: FatherServiceChildComponent;
  let fixture: ComponentFixture<FatherServiceChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherServiceChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherServiceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
