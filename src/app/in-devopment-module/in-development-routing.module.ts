import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InDevelopmentComponent } from './component/in-development/in-development.component';

const inDevelopmentRoutes: Routes = [
  { path: '', component: InDevelopmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(inDevelopmentRoutes)],
  exports: [RouterModule],
})
export class InDevelopmentRoutingModule {}
