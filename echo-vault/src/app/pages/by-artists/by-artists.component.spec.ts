import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByArtistsComponent } from './by-artists.component';

describe('ByArtistsComponent', () => {
  let component: ByArtistsComponent;
  let fixture: ComponentFixture<ByArtistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByArtistsComponent]
    });
    fixture = TestBed.createComponent(ByArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
