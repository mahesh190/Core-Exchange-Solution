import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemittanceComponent } from './remittance.component';
import { RemittanceInitiationComponent } from './RemiComponents/remittance-initiation/remittance-initiation.component';


const routes: Routes = [
  {
    path: '',
    component: RemittanceComponent,

    children: [
      {
        path: 'remittanceInitiation',
        component: RemittanceInitiationComponent
      }
    ],
  },
];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemittanceRoutingModule { }
