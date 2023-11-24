import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubStaffsComponent } from './club-staffs.component';

describe('ClubStaffsComponent', () => {
  let component: ClubStaffsComponent;
  let fixture: ComponentFixture<ClubStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubStaffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
