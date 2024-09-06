import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import {RouterModule} from '@angular/router';
import { AddModuleComponent } from '../add-module/add-module.component';

@Component({
  selector: 'app-module-master',
  standalone: true,
  imports: [SharedModule,RouterModule,AddModuleComponent],
  templateUrl: './module-master.component.html',
  styleUrl: './module-master.component.scss'
})
export class ModuleMasterComponent {

}
