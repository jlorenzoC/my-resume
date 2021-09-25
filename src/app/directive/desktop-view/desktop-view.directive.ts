import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Directive,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { pluck } from 'rxjs/operators';
import { breakpointsToMatch } from 'src/app/screen-breakpoints/breakpoints';

@Directive({
  selector: '[appDesktopView]',
})
export class DesktopViewDirective implements OnDestroy {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateReference: TemplateRef<any>,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(breakpointsToMatch)
      .pipe(pluck('matches'))
      .subscribe(this.showHideHost);
  }

  private showHideHost = (matches: boolean) => {
    !matches
      ? this.viewContainerRef.createEmbeddedView(this.templateReference)
      : this.viewContainerRef.clear();
  };

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }
}
