import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { breakpointsToMatch } from 'src/app/screen-breakpoints/breakpoints';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent implements OnDestroy {
  isSmallViewActive: Observable<boolean>;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.isSmallViewActive = this.breakpointObserver
      .observe(breakpointsToMatch)
      .pipe(
        map(({ matches }) => {
          const isSmallViewActive = matches;
          return isSmallViewActive;
        })
      );
  }

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }
}
