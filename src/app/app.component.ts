import { Component } from '@angular/core';
import { SidebarCoreComponent } from './shared/sidebar/sidebar-core/sidebar-core.component';
import { NavbarCoreComponent } from './shared/navbar-mobile/navbar-core/navbar-core.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    NavbarCoreComponent,
    HomeComponent,
    AboutComponent,
    SidebarCoreComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio_2025';

  collapsed = false; // Para controlar el sidebar en desktop
}
