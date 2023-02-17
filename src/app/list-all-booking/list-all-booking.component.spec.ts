import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllBookingComponent } from './list-all-booking.component';

describe('ListAllBookingComponent', () => {
  let component: ListAllBookingComponent;
  let fixture: ComponentFixture<ListAllBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
