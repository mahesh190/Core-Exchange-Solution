import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiationFormComponent } from './initiation-form.component';

describe('InitiationFormComponent', () => {
  let component: InitiationFormComponent;
  let fixture: ComponentFixture<InitiationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
