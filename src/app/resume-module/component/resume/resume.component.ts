import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { pluck, shareReplay, tap } from 'rxjs/operators';
import { breakpointsToMatch } from 'src/app/screen-breakpoints/breakpoints';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, OnDestroy {
  @ViewChild('drawer', { static: true }) matSidenav?: MatSidenav;
  isHandset$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver
      .observe(breakpointsToMatch)
      .pipe(pluck('matches'), shareReplay(), tap(this.closeSideNavbar));
  }

  private closeSideNavbar = (matches: boolean) => {
    if (!matches) this.matSidenav?.close();
  };

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }
}
