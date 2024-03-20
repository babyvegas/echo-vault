import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTracksComponent } from './by-tracks.component';

describe('ByTracksComponent', () => {
  let component: ByTracksComponent;
  let fixture: ComponentFixture<ByTracksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByTracksComponent]
    });
    fixture = TestBed.createComponent(ByTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
