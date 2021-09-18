import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ResumeRouterModule } from './temporal-flow/resume-router.module';
import { InDevelopmentComponent } from './temporal-flow/in-development/in-development.component';
import { WipWelcomeComponent } from './temporal-flow/wip-welcome/wip-welcome.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [AppComponent, InDevelopmentComponent, WipWelcomeComponent, ResumeViewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResumeRouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
