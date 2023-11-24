import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediabannerComponent } from './socialmediabanner.component';

describe('SocialmediabannerComponent', () => {
  let component: SocialmediabannerComponent;
  let fixture: ComponentFixture<SocialmediabannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediabannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediabannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
