import { Component } from '@angular/core';
import { inOutAnimation } from './animation/resume-in-out.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [inOutAnimation],
})
export class AppComponent {
  title = 'my-resume';
}
