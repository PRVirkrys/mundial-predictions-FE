import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedList } from './played-list';

describe('PlayedList', () => {
  let component: PlayedList;
  let fixture: ComponentFixture<PlayedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayedList],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayedList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
