import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemittanceRoutingModule } from './remittance-routing.module';
import { RemittanceComponent } from './remittance.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@NgModule({
  declarations: [
    RemittanceComponent
  ],
  imports: [
    CommonModule,
    RemittanceRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class RemittanceModule { }
