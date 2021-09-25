import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-name',
  template: '<span>{{ headerName }}</span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNameComponent {
  headerName = "Javier's";
}
