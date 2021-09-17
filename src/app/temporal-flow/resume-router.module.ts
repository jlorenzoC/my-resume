import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InDevelopmentComponent } from './in-development/in-development.component';
import { WipWelcomeComponent } from './wip-welcome/wip-welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: environment.rootPath + 'welcome',
  },
  { path: environment.rootPath + 'welcome', component: WipWelcomeComponent },
  {
    path: environment.rootPath + 'in-development',
    component: InDevelopmentComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ResumeRouterModule {}
