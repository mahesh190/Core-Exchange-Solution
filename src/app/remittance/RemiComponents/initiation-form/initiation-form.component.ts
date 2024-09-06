import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RemittanceServService } from '../../RemiServices/remittance-serv.service';
import { MatSelectChange } from '@angular/material/select';
import { NavBarComponent } from 'src/app/theme/layout/admin/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-initiation-form',
  standalone: true,
  imports: [SharedModule,MatToolbarModule, MatInputModule, MatDialogModule, FormsModule, ReactiveFormsModule,MatIconModule],
  templateUrl: './initiation-form.component.html',
  styleUrl: './initiation-form.component.scss'
})
export class InitiationFormComponent implements OnInit {
  empForm: FormGroup;
  shortLink:string = "";
  loading:boolean = false; //Flag variable
  file!:File;
  fileName: string | null = null;
  fileSize:any;
  fileType:any;
  fileObj:any;
  value = 'Clear me';

  remittanceMethodDropDown = [

    { label: 'Bank Transfers', value: 'Bank Transfers' },
    { label: 'Cryptocurrency', value: 'Cryptocurrency' },
    { label: 'Postal', value: 'Postal' },
    { label: 'Prepaid ', value: 'Prepaid ' }


  ];


  exchangerateAPI= {"USD":"12.55","INR":"1.55","RUS":"7.55","ITL":"8.55","BEL":"0.55"}

  currenciesDropDown = [
    { label: 'USD', value: 'USD', },
    { label: 'INR', value: 'INR' },
    { label: 'RUS', value: 'RUS' },
    { label: 'ITL', value: 'ITL' },
    { label: 'BEL', value: 'BEL' }



  ];
  paymentMetDropDown = [
    { value: 'Cash', label: 'Cash' },
    { value: 'Bank Transfer', label: 'Bank Transfer' },
    { value: 'Credit Card', label: 'Credit Card' },
    { value: 'Mobile Money', label: 'Mobile Money' },
    { value: 'Online Transfer', label: 'Online Transfer' },

    { value: 'Cheque', label: 'Cheque' },

  ];
  kyccustids: any;
  constructor(
    private _fb: FormBuilder,
    private _remitanceService: RemittanceServService,

    private _dialogRef: MatDialogRef<InitiationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.empForm = new FormGroup({
      SenderID: new FormControl(''),
      ReceiverID: new FormControl(''),
      Currency: new FormControl('', [Validators.pattern('[A-Za-z\\s]*')]),
      Amount: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      ExchangeRate: new FormControl('', [Validators.pattern('^[0-9]{3}.(.[0-9]{2})?$')]),
      RemittanceMethod: new FormControl(''),
      Fees: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      TotalAmount: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      PaymentMethod: new FormControl(''),
      documents:new FormControl(''),
      documentsText:new FormControl('')
    });




  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileObj= input.files[0];
      this.fileName = this.fileObj.name;
      this.fileSize=this.fileObj.size;
      this.fileType=this.fileObj.type;
      console.log('Selected file:', this.fileObj);
    } else {
      this.fileName = null;
    }
    this.empForm.patchValue({
      documentsText:this.fileName
    })
  }

  ngOnInit(): void {
    console.log("init="+this.data)
    this.empForm.patchValue({
      documents:this.data.documentFile
    })
    this.empForm.patchValue(this.data);
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();

      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
//   onCurrencyChange(value: string): void {
//     const toRate = this.exchangerateAPI[value];

//     this.empForm.patchValue({
//       ExchangeRate: toRate,
//     });
// }
  onFormSubmit() {
    console.log(this.data);
    if (this.empForm.valid) {
      if (this.data) {
        console.log(this.data);
        this._remitanceService.updateRemittanceInitiationData(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            Swal.fire({
              title: 'Data Updated !',

              icon: 'success'
            });
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        this._remitanceService.addRemittanceInitiationData(this.empForm.value).subscribe({
          next: (val: any) => {
            Swal.fire({
              title: 'Data Added !',

              icon: 'success'
            });
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }
}
