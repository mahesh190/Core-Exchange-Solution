import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { RetailCustomerService } from 'src/app/Services/retail-customer.service';

@Component({
  selector: 'app-corporate-confirmation',
  standalone: true,

  imports: [MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './corporate-confirmation.component.html',
  styleUrl: './corporate-confirmation.component.scss'
})
export class CorporateConfirmationComponent {
  constructor(
    private builder: FormBuilder,
    public _retailService: RetailCustomerService,
    private route: Router
  ) {}

  lastItem: any;

  ngOnInit(): void {
    this.getCorporateCustDetails();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
  getCorporateCustDetails() {
    this._retailService.getLastItemOfCorporateCustomers().subscribe(
      (item) => {
        this.lastItem = item;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update((i) => i + 1);
  }

  prevStep() {
    this.step.update((i) => i - 1);
  }

  confirm() {
    this.route.navigateByUrl('/corporatesucess');
  }
}
