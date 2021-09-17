import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeRouterModule } from './temporal-flow/resume-router.module';
import { InDevelopmentComponent } from './temporal-flow/in-development/in-development.component';
import { WipWelcomeComponent } from './temporal-flow/wip-welcome/wip-welcome.component';

@NgModule({
  declarations: [AppComponent, InDevelopmentComponent, WipWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResumeRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
