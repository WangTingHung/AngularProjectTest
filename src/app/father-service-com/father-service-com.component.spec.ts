import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherServiceComComponent } from './father-service-com.component';

describe('FatherServiceComComponent', () => {
  let component: FatherServiceComComponent;
  let fixture: ComponentFixture<FatherServiceComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherServiceComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherServiceComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
