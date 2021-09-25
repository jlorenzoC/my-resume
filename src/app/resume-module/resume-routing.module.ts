import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './component/resume/resume.component';

const resumeModuleRoutes: Routes = [{ path: '', component: ResumeComponent }];

@NgModule({
  imports: [RouterModule.forChild(resumeModuleRoutes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
