import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RetailCustomerService } from 'src/app/Services/retail-customer.service';
import { MatCalendarCellClassFunction, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ChangeDetectionStrategy } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-retail-customer',
  standalone: true,
  imports: [
    SharedModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './retail-customer.component.html',
  styleUrl: './retail-customer.component.scss'
})
export class RetailCustomerComponent {
  constructor(
    private builder: FormBuilder,
    private _retailService: RetailCustomerService,
    private route: Router
  ) {}
  retailCustData: any;
  isLinear = false;

  ngOnInit(): void {}
  gender: string[] = ['Male', 'Female', 'Other'];
  nationalities: string[] = ['IND', 'USA', 'Other'];
  IdentificationDocuments: string[] = ['Aaadhar Card', 'Passport', 'Other'];

  IssuingCountries: string[] = ['IND', 'USA', 'Other'];
  KYCStatuses: string[] = ['Completed', 'Verify', 'Other'];
  verificationOfficers: string[] = ['Admin', 'Guest', 'Other'];

  Empregister = this.builder.group({
    persnalDetails: this.builder.group({
      firstname: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      lastname: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      DateOfBirth: this.builder.control('', Validators.required),
      Gender: this.builder.control('', Validators.required),
      Address: this.builder.control('', Validators.required),
      PhoneNumber: this.builder.control('', Validators.pattern('^[0-9]*$')),
      Email: this.builder.control('', Validators.pattern('^[^@]+@([-\\w]+\\.)+[A-Za-z]{2,4}$')),
      Nationality: this.builder.control('', Validators.required)
    }),
    kycverify: this.builder.group({
      IdentificationDocument: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      IdentificationDocumentNumber: this.builder.control('', Validators.pattern('^[0-9]*$')),
      IssuingCountry: this.builder.control('', Validators.required),
      IssueDate: this.builder.control('', Validators.required),
      ExpiryDate: this.builder.control('', Validators.required),
      KYCStatus: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      KYCVerificationDate: this.builder.control('', Validators.required),
      VerificationOfficer: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      VerificationRemarks: this.builder.control('', Validators.pattern('[A-Za-z\\s]*'))
    }),
    bankdetails: this.builder.group({
      BankAccountNumber: this.builder.control('', Validators.pattern('^[0-9]*$')),
      AccountHolderName: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      SortCode: this.builder.control('', Validators.pattern('^[0-9_-]{10,12}')),
      Bank: this.builder.control('', Validators.pattern('[A-Za-z\\s]*'))
    })
  });

  get personform() {
    return this.Empregister.get('persnalDetails') as FormGroup;
  }
  get kycform() {
    return this.Empregister.get('kycverify') as FormGroup;
  }
  get bankform() {
    return this.Empregister.get('bankdetails') as FormGroup;
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
  HandleSubmit() {
    if (this.Empregister.valid) {
      console.log(this.Empregister.value);
      console.log(this.Empregister.get('persnalDetails')?.value);
      console.log(this.Empregister.get('kycverify')?.value);
      console.log(this.Empregister.get('bankdetails')?.value);

      this.retailCustData = {
        persnalDetails: this.Empregister.get('persnalDetails')?.value,
        kycverify: this.Empregister.get('kycverify')?.value,
        bankdetails: this.Empregister.get('bankdetails')?.value
      };

      this._retailService.storePassedObject(this.retailCustData);

      this._retailService.addRetailCustomerData(this.retailCustData).subscribe((response) => {
        if (response) {
          Swal.fire({
            title: 'Data Successfully Saved !',
            text: '',
            icon: 'success'
          });

          this.route.navigateByUrl('/confirmation');
        }
      });
    }
  }
}
