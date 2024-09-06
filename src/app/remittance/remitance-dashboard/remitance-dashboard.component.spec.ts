import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitanceDashboardComponent } from './remitance-dashboard.component';

describe('RemitanceDashboardComponent', () => {
  let component: RemitanceDashboardComponent;
  let fixture: ComponentFixture<RemitanceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemitanceDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemitanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
