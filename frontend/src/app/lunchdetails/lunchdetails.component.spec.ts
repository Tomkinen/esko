import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchdetailsComponent } from './lunchdetails.component';

describe('LunchdetailsComponent', () => {
  let component: LunchdetailsComponent;
  let fixture: ComponentFixture<LunchdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
