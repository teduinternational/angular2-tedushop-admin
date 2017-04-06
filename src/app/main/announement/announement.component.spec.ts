import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounementComponent } from './announement.component';

describe('AnnounementComponent', () => {
  let component: AnnounementComponent;
  let fixture: ComponentFixture<AnnounementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
