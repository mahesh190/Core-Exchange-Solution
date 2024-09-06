import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersComponent } from './masters.component';
import { UserMasterComponent } from './masterComponent/user-master/user-master.component';
import { AddModuleComponent } from './masterComponent/add-module/add-module.component';

const routes: Routes = [{
  path: '', component: MastersComponent, 
  children: [
    {
      path: 'userMaster',
      component: UserMasterComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
