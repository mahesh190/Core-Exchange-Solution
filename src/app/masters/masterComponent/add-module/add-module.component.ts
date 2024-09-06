import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 323, name: 'sqs', weight:0, symbol: '2ssq'},
 
];
@Component({
  selector: 'app-add-module',
  standalone: true,
  imports: [SharedModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatTableModule,MatSelectModule],
  templateUrl: './add-module.component.html',
  styleUrl: './add-module.component.scss'
})
export class AddModuleComponent {
  myform: FormGroup;
  constructor(private fb: FormBuilder) {}
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  templates: string[] = ['Screen', 'Report', 'Dashboard'];

  ngOnInit() {
    this.myform = this.fb.group({
      email: ['', Validators.required, Validators.email],
      phones: this.fb.array([this.initRows()]),
    });

    this.myform.valueChanges.subscribe(console.log);
  }

  get phoneForms() {
    return this.myform.get('phones') as FormArray;
  }
  initRows() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    return phone
  }
  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
  submitForm() {
    console.log(this.myform.value);
  }
  
}
