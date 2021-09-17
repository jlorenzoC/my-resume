import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InDevelopmentComponent } from './in-development/in-development.component';
import { WipWelcomeComponent } from './wip-welcome/wip-welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  { path: 'welcome', component: WipWelcomeComponent },
  {
    path: 'in-development',
    component: InDevelopmentComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class ResumeRouterModule {}
