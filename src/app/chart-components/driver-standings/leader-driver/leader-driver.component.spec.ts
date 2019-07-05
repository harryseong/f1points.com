import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderDriverComponent } from './leader-driver.component';

describe('LeaderDriverComponent', () => {
  let component: LeaderDriverComponent;
  let fixture: ComponentFixture<LeaderDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
