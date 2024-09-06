import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { RetailCustomerService } from 'src/app/Services/retail-customer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sucess-component',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sucess-component.component.html',
  styleUrl: './sucess-component.component.scss'
})
export class SucessComponentComponent implements OnInit {
  lastItem: any;

  constructor(
    private builder: FormBuilder,
    public _retailService: RetailCustomerService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getRetailCustDetails();
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  getRetailCustDetails() {
    this._retailService.getLastItem().subscribe(
      (item) => {
        this.lastItem = item;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}
