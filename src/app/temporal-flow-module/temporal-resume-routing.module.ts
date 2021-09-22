import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WipWelcomeComponent } from './component/wip-welcome/wip-welcome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    component: WipWelcomeComponent,
    data: { animation: 'welcome' },
  },
  {
    path: 'in-development',
    loadChildren: () =>
      import('../in-devopment-module/in-development.module').then(
        (m) => m.InDevelopmentModule
      ),
    data: { animation: 'in-development' },
  },
  {
    path: 'resume-view',
    loadChildren: () =>
      import('../resume-module/resume.module').then((m) => m.ResumeModule),
    data: { animation: 'resume-view' },
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ResumeRouterModule {}
