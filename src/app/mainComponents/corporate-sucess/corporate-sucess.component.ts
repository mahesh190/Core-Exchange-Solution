import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { RetailCustomerService } from 'src/app/Services/retail-customer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-corporate-sucess',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './corporate-sucess.component.html',
  styleUrl: './corporate-sucess.component.scss'
})
export class CorporateSucessComponent {
  lastItem: any;

  constructor(
    private builder: FormBuilder,
    public _retailService: RetailCustomerService,
    private route: Router
  ) {}

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
}
