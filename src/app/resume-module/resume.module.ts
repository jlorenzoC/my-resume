import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedMaterialModule } from '../shared-module/shared-material.module';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeViewComponent } from './component/resume-view/resume-view.component';

@NgModule({
  declarations: [ResumeViewComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    LayoutModule,
    PortalModule,
    SharedMaterialModule,
    ResumeRoutingModule,
  ],
})
export class ResumeModule {}
