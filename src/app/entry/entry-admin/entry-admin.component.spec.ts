import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAdminComponent } from './entry-admin.component';

describe('EntryAdminComponent', () => {
  let component: EntryAdminComponent;
  let fixture: ComponentFixture<EntryAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
