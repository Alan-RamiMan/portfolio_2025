import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-core',
  imports: [],
  templateUrl: './navbar-core.component.html',
})
export class NavbarCoreComponent {
  collapsed = false;
  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
