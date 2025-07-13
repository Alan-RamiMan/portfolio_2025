import { Component, signal } from '@angular/core';
import { SidebarCoreComponent } from './shared/sidebar/sidebar-core/sidebar-core.component';
import { NavbarCoreComponent } from './shared/navbar-mobile/navbar-core/navbar-core.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExpComponent } from './features/experience/exp.component';

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
    SkillsComponent,
    ExpComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio_2025';

  //Estado del sidebar(abierto o cerrado) en desktop
  // collapsed = false;

  //Mostrar sidebar en mobile
}
