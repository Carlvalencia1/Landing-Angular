import { Component } from '@angular/core';
import { RouterOutlet,  RouterLink  } from '@angular/router';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { InformationComponent } from './components/information/information.component';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  RouterLink, NavbarComponent, LandingComponent, FooterComponent, InformationComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LandingPorsche';
}
