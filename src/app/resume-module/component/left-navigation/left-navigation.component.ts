import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
