import { ResumeViewComponent } from '../resume-view/resume-view.component';
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
  { path: 'welcome', component: WipWelcomeComponent,data:{animation:'welcome'} },
  {
    path: 'in-development',
    component: InDevelopmentComponent,
    data:{animation:'in-development'}
  },
  {
    path: 'resume-view',
    component: ResumeViewComponent,
    data:{animation:'resume-view'}
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class ResumeRouterModule {}
