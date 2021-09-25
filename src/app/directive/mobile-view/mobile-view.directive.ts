import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { breakpointsToMatch } from '../../screen-breakpoints/breakpoints';

@Directive({
  selector: '[appMobileView]',
})
export class MobileViewDirective implements OnDestroy {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateReference: TemplateRef<any>,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(breakpointsToMatch)
      .pipe(pluck('matches'), distinctUntilChanged())
      .subscribe(this.showHideHost);
  }

  private showHideHost = (matches: boolean) => {
    matches
      ? this.viewContainerRef.createEmbeddedView(this.templateReference)
      : this.viewContainerRef.clear();
  };

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }
}
