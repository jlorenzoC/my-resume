import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MobileViewDirective } from '../directive/mobile-view/mobile-view.directive';
import { SharedMaterialModule } from '../shared-module/shared-material.module';
import { DesktopViewDirective } from './../directive/desktop-view/desktop-view.directive';
import { HappyEmojiBannerComponent } from './component/happy-emoji-banner.component/happy-emoji-banner.component';
import { HeaderNameComponent } from './component/header-name/header-name.component';
import { IntroductionComponent } from './component/introduction/introduction.component';
import { NavegationButtonsComponent } from './component/navegation-buttons/navegation-buttons.component';
import { ResumeComponent } from './component/resume/resume.component';
import { SectionsComponent } from './component/sections/sections.component';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
  declarations: [
    SectionsComponent,
    IntroductionComponent,
    ResumeComponent,
    HappyEmojiBannerComponent,
    NavegationButtonsComponent,
    MobileViewDirective,
    DesktopViewDirective,
    HeaderNameComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    LayoutModule,
    PortalModule,
    SharedMaterialModule,
    ResumeRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class ResumeModule {}
