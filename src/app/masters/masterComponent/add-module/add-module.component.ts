import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-module',
  standalone: true,
  imports: [SharedModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatTableModule,MatSelectModule],
  templateUrl: './add-module.component.html',
  styleUrl: './add-module.component.scss'
})
export class AddModuleComponent {
  myform: FormGroup;
  rowCount: number = 1;
  constructor(private fb: FormBuilder) {}

  templates: string[] = ['Screen', 'Report', 'Dashboard'];

  ngOnInit() {
    this.myform = this.fb.group({
      moduleName: ['', Validators.required, Validators.email],
      moduleGroup: ['', Validators.required, Validators.email],
      subModules: this.fb.array([this.initRows()]),
    });

    this.myform.valueChanges.subscribe(console.log);
  }

  get SubModdulesForms() {
    return this.myform.get('subModules') as FormArray;
  }
  
  initRows() {
    const sub_module = this.fb.group({
      subModuleName: [],
      template: []
    });
    return sub_module
  }


  addSub_module() {
    const sub_module = this.fb.group({
      subModuleName: [],
      template: []
    });
    this.SubModdulesForms.push(sub_module);
    this.rowCount = this.SubModdulesForms.length;
    alert( this.rowCount)
  }

  deleteSub_module(i) {
    this.SubModdulesForms.removeAt(i);
    this.rowCount = this.SubModdulesForms.length;
    alert( this.rowCount)
  }
  submitForm() {
    console.log(this.myform.value);
  }
  
}
