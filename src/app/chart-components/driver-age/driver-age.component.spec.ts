import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAgeComponent } from './driver-age.component';

describe('DriverAgeComponent', () => {
  let component: DriverAgeComponent;
  let fixture: ComponentFixture<DriverAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
