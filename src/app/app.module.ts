import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TemporalResumeModule } from './temporal-flow-module/temporal-resume.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TemporalResumeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
