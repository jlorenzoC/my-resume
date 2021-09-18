import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeViewComponent } from './component/resume-view/resume-view.component';

const resumeModuleRoutes: Routes = [
  { path: '', component: ResumeViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(resumeModuleRoutes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
