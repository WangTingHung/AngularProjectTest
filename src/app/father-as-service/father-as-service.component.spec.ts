import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherAsServiceComponent } from './father-as-service.component';

describe('FatherAsServiceComponent', () => {
  let component: FatherAsServiceComponent;
  let fixture: ComponentFixture<FatherAsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherAsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherAsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
