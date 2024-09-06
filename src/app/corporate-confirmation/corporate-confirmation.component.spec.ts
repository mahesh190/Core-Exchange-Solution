import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateConfirmationComponent } from './corporate-confirmation.component';

describe('CorporateConfirmationComponent', () => {
  let component: CorporateConfirmationComponent;
  let fixture: ComponentFixture<CorporateConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
