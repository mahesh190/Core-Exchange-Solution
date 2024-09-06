import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// project import
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
  selector: 'app-corporate-customer',
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
  templateUrl: './corporate-customer.component.html',
  styleUrl: './corporate-customer.component.scss'
})
export class CorporateCustomerComponent {
  constructor(
    private builder: FormBuilder,
    private _retailService: RetailCustomerService,
    private route: Router
  ) {}
  corpCustData: any;
  isLinear = false;
  isVerified = false;

  ngOnInit(): void {}
  businesstype: string[] = ['Financial', 'Insurance', 'Others'];
  enrollprod: string[] = ['Insurance', 'Business Insurance', 'Others'];
  busstype: string[] = ['Business Insurance', 'Finance Insurance', 'Others'];
  companyoper: string[] = ['Mumbai', 'Chennai', 'Other'];
  selectcount: string[] = ['Model1GA', 'BAModel1GA', 'Others'];
  fatcacls: string[] = ['Yes', 'No', 'Null'];
  crsreports: string[] = ['Verify', 'Not Verify', 'Others'];
  couties: string[] = ['USA', 'CANADA', 'Others'];
  stdCodes: string[] = ['91', '92', '93'];

  CorporateRegister = this.builder.group({
    basicDetails: this.builder.group({
      typebusiness: this.builder.control('', Validators.required),
      enrollprods: this.builder.control('', Validators.required)
    }),
    businessfm: this.builder.group({
      bustypes: this.builder.control('', Validators.required),
      compnyoper: this.builder.control('', Validators.required),
      juriesta: this.builder.control('', Validators.required),
      fatcaclass: this.builder.control('', Validators.required),
      crsreport: this.builder.control('', Validators.required)
    }),
    companyFormdetails: this.builder.group({
      RegistrationNumber: this.builder.control('', Validators.pattern('^[0-9]*$')),
      NameofLegalEntity: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      RepresentativeName: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      DesignationofRepresentative: this.builder.control('', Validators.pattern('[A-Za-z\\s]*')),
      EmailID: this.builder.control('', Validators.pattern('^[^@]+@([-\\w]+\\.)+[A-Za-z]{2,4}$')),
      Country: this.builder.control('', Validators.required),
      stdCode: this.builder.control('', Validators.required),
      ContactNumber: this.builder.control('', Validators.pattern('^[0-9]*$'))
    })
  });

  get basicform() {
    return this.CorporateRegister.get('basicDetails') as FormGroup;
  }
  get businessForm() {
    return this.CorporateRegister.get('businessfm') as FormGroup;
  }
  get CompanyForm() {
    return this.CorporateRegister.get('companyFormdetails') as FormGroup;
  }

  toggleVerification() {
    if (this.CompanyForm.value.RegistrationNumber) {
      this.isVerified = !this.isVerified;
    }
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  HandleSubmit() {
    if (this.CorporateRegister.valid) {
      console.log(this.CorporateRegister.value);
      console.log(this.CorporateRegister.get('basicDetails')?.value);
      console.log(this.CorporateRegister.get('businessfm')?.value);
      console.log(this.CorporateRegister.get('companyFormdetails')?.value);

      this.corpCustData = {
        basicDetails: this.CorporateRegister.get('basicDetails')?.value,
        businessfm: this.CorporateRegister.get('businessfm')?.value,
        companyFormdetails: this.CorporateRegister.get('companyFormdetails')?.value
      };

      this._retailService.storePassedObject(this.corpCustData);

      this._retailService.addCorpCustomerData(this.corpCustData).subscribe((response) => {
        if (response) {
          Swal.fire({
            title: 'Data Successfully Saved !',
            text: '',
            icon: 'success'
          });

          this.route.navigateByUrl('/Corporateconfirmation');
        }
      });
    }
  }
}
