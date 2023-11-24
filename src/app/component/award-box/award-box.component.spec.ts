import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardBoxComponent } from './award-box.component';

describe('AwardBoxComponent', () => {
  let component: AwardBoxComponent;
  let fixture: ComponentFixture<AwardBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
