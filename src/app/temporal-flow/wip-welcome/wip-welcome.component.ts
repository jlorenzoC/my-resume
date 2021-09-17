import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wip-welcome',
  templateUrl: 'wip-welcome.component.html',
  styleUrls: ['wip-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WipWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
