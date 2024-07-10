import { Routes } from '@angular/router';
import { IntroducaoComponent } from './pages/introducao/introducao.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', redirectTo: '/introducao', pathMatch: 'full' },
  { path: 'introducao', component: IntroducaoComponent },
  { path: 'contato', component: ContatoComponent },
];
