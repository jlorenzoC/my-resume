import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-in-development',
  templateUrl: 'in-development.component.html',
  styleUrls: ['in-development.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InDevelopmentComponent implements OnInit {
  resourceRootPath = '';
  constructor() {}

  ngOnInit(): void {
    this.resourceRootPath = environment.rootPath;
  }
}
