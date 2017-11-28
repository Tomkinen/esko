import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlunchComponent } from './listlunch.component';

describe('ListlunchComponent', () => {
  let component: ListlunchComponent;
  let fixture: ComponentFixture<ListlunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
