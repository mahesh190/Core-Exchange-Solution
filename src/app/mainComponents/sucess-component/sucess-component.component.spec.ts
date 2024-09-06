import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessComponentComponent } from './sucess-component.component';

describe('SucessComponentComponent', () => {
  let component: SucessComponentComponent;
  let fixture: ComponentFixture<SucessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
