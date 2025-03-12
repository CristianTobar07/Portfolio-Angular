import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobremi', component: SobremiComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
