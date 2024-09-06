// Angular Import
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  windowWidth: number;
  @Output() NavMobCollapse = new EventEmitter();

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.NavMobCollapse.emit();
    }
  }
}
