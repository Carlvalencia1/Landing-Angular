import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  porscheModels = [
    { name: 'New 2024 Porsche 911 Carrera', imgSrc: '.assets/presentacion2.jpg' },
    { name: 'New 2024 Porsche 911 Specs', imgSrc: 'assets/presentacion2.jpg' },
    { name: 'Porsche 911 GTR', imgSrc: 'assets/presentacion2.jpg' },
    { name: 'Kinsmart Porsche Carrera GT', imgSrc: 'assets/presentacion2.jpg'},
    { name: 'Porsche 911 Convertible', imgSrc: 'assets/presentacion2.jpg' },
    { name: 'Porsche 911 GTR RS', imgSrc: 'assets/presentacion2.jpg' }
  ];

}
