import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './theme/layout/admin/admin.component';
import { NewCustomerScreenComponent } from './mainComponents/new-customer-screen/new-customer-screen.component';
import { RetailCustomerComponent } from './mainComponents/retail-customer/retail-customer.component';
import DashAnalyticsComponent from './mainComponents/dashboard/dash-analytics.component';
import { ConfirmationCompComponent } from './confirmation-comp/confirmation-comp.component';
import { SucessComponentComponent } from './mainComponents/sucess-component/sucess-component.component';
import { CurrencyExchangeComponent } from './mainComponents/currency-exchange/currency-exchange.component';
import { CorporateCustomerComponent } from './mainComponents/corporate-customer/corporate-customer.component';
import { CorporateConfirmationComponent } from './corporate-confirmation/corporate-confirmation.component';
import { CorporateSucessComponent } from './mainComponents/corporate-sucess/corporate-sucess.component';
import { RemittanceComponent } from './mainComponents/remittance/remittance.component';
import { RemittanceInitiationComponent } from './remittance/RemiComponents/remittance-initiation/remittance-initiation.component';
import { UserMasterComponent } from './masters/masterComponent/user-master/user-master.component';
import { ModuleMasterComponent } from './masters/masterComponent/module-master/module-master.component';
import { AddModuleComponent } from './masters/masterComponent/add-module/add-module.component';
import { RemitanceDashboardComponent } from './remittance/remitance-dashboard/remitance-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashAnalyticsComponent
      },
      {
        path: 'currencyExchange',
        component: CurrencyExchangeComponent
      },

      {
        path: 'newcustomer',
        component: NewCustomerScreenComponent
      },
      {
        path: 'retailCustomer',
        component: RetailCustomerComponent
      },
      {
        path: 'corporateCustomer',
        component: CorporateCustomerComponent
      },
      {
        path: 'confirmation',
        component: ConfirmationCompComponent
      },
      {
        path: 'Corporateconfirmation',
        component: CorporateConfirmationComponent
      },
      {
        path: 'sucess',
        component: SucessComponentComponent
      },
      {
        path: 'corporatesucess',
        component: CorporateSucessComponent
      },
      {
        path: 'remittanceInitiation',
        component: RemittanceInitiationComponent
      },
      
      {
        path: 'userMaster',
        component: UserMasterComponent
      },
      
      {
        path: 'moduleMaster',
        component: ModuleMasterComponent
      }
      ,
      
      {
        path: 'addModule',
        component: AddModuleComponent
      },
      {
        path: 'remittanceDashboard',
        component: RemitanceDashboardComponent
      }
    ]
  },
  { path: '', loadChildren: () => import('./remittance/remittance.module').then(m => m.RemittanceModule) },
  { path: '', loadChildren: () => import('./masters/masters.module').then(m => m.MastersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
