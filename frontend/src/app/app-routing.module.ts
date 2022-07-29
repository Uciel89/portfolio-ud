import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*===/ Import Components /===*/
import { LoginComponent } from './pages/login/login.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ModeEditComponent } from './pages/mode-edit/mode-edit.component';
import { PersonGuardService as guard } from './guards/person-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'portfolio/login',
    component: LoginComponent,
  },
  {
    path: 'portfolio/mode_edit',
    component: ModeEditComponent,
    canActivate: [guard],
    data: { expectedRol: ['admin', 'user'] },
  },
  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
