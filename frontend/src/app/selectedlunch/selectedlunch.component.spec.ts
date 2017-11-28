import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedlunchComponent } from './selectedlunch.component';

describe('SelectedlunchComponent', () => {
  let component: SelectedlunchComponent;
  let fixture: ComponentFixture<SelectedlunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedlunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedlunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
