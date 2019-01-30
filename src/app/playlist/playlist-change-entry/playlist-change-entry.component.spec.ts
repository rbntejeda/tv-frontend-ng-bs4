import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistChangeEntryComponent } from './playlist-change-entry.component';

describe('PlaylistChangeEntryComponent', () => {
  let component: PlaylistChangeEntryComponent;
  let fixture: ComponentFixture<PlaylistChangeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistChangeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistChangeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
