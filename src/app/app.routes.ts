import { Routes } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const routes: Routes = [ 
    {path: '', component: LandingComponent},
    {path: 'information', component: InformationComponent},
    {path: 'categorias', component: CategoriesComponent}

];
