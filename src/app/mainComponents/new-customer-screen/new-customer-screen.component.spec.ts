import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerScreenComponent } from './new-customer-screen.component';

describe('NewCustomerScreenComponent', () => {
  let component: NewCustomerScreenComponent;
  let fixture: ComponentFixture<NewCustomerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomerScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCustomerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
