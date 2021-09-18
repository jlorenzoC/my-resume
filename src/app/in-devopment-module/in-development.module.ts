import { SharedMaterialModule } from './../shared-module/shared-material.module';
import { NgModule } from '@angular/core';
import { InDevelopmentComponent } from './component/in-development/in-development.component';
import { InDevelopmentRoutingModule } from './in-development-routing.module';

@NgModule({
  declarations: [InDevelopmentComponent],
  imports: [InDevelopmentRoutingModule, SharedMaterialModule],
})
export class InDevelopmentModule {}
