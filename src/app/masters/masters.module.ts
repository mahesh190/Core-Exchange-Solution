import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MastersComponent } from './masters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    MastersComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,FormsModule, ReactiveFormsModule
  ]
})
export class MastersModule { }
