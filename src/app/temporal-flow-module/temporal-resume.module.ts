import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../shared-module/shared-material.module';
import { WipWelcomeComponent } from './component/wip-welcome/wip-welcome.component';
import { ResumeRouterModule } from './temporal-resume-routing.module';

@NgModule({
  declarations: [WipWelcomeComponent],
  imports: [SharedMaterialModule, ResumeRouterModule],
  exports: [ResumeRouterModule],
})
export class TemporalResumeModule {}
