import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent {
  isChecked: boolean = false;
  sh: any;
  ReadMore: boolean = true;

  visible: boolean = false;
  type: any;

  visiblediv1: boolean = true;
  visiblediv2: boolean = false;

  onclick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }

  onChange(e) {
    this.type = e.target.value;
    if (this.type === 'div1') {
      this.visiblediv1 = true;
      this.visiblediv2 = false;
    } else {
      this.visiblediv2 = true;
      this.visiblediv1 = false;
    }
    alert(this.type);
  }
}
