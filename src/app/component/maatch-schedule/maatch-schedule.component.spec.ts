import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaatchScheduleComponent } from './maatch-schedule.component';

describe('MaatchScheduleComponent', () => {
  let component: MaatchScheduleComponent;
  let fixture: ComponentFixture<MaatchScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaatchScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaatchScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
