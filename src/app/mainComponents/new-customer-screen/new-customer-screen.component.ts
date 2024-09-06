import { Component } from '@angular/core';

import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-new-customer-screen',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './new-customer-screen.component.html',
  styleUrl: './new-customer-screen.component.scss'
})
export class NewCustomerScreenComponent {}