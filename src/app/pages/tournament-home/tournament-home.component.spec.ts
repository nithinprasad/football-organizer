import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentHomeComponent } from './tournament-home.component';

describe('TournamentHomeComponent', () => {
  let component: TournamentHomeComponent;
  let fixture: ComponentFixture<TournamentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
