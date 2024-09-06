import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSucessComponent } from './corporate-sucess.component';

describe('CorporateSucessComponent', () => {
  let component: CorporateSucessComponent;
  let fixture: ComponentFixture<CorporateSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateSucessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
