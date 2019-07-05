import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderConstructorComponent } from './leader-constructor.component';

describe('LeaderConstructorComponent', () => {
  let component: LeaderConstructorComponent;
  let fixture: ComponentFixture<LeaderConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
