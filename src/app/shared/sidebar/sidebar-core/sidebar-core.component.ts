import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-core',
  imports: [],
  templateUrl: './sidebar-core.component.html',
})
export class SidebarCoreComponent {
  isSidebarOpen = signal(true);
  toggleSidebar() {
    this.isSidebarOpen.update((open) => !open);
  }
}
