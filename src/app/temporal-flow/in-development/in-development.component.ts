import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-in-development',
  templateUrl: 'in-development.component.html',
  styleUrls: ['in-development.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InDevelopmentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
