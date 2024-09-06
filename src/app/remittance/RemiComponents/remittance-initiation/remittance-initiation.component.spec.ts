import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceInitiationComponent } from './remittance-initiation.component';

describe('RemittanceInitiationComponent', () => {
  let component: RemittanceInitiationComponent;
  let fixture: ComponentFixture<RemittanceInitiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemittanceInitiationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemittanceInitiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
