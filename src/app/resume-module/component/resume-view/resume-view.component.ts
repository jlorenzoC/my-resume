import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { breakpointsToMatch } from 'src/app/screen-breakpoints/breakpoints';
import { SectionContent } from '../../model/section-content';
import { AsideComponent } from '../aside/aside.component';
import { FooterComponent } from '../footer/footer.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { LeftNavigationComponent } from '../left-navigation/left-navigation.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss'],
})
export class ResumeViewComponent implements OnDestroy {
  sections: Observable<SectionContent[]>;
  introductionComponent = new ComponentPortal(IntroductionComponent);
  mainComponent = new ComponentPortal(MainComponent);
  leftNavigationComponent = new ComponentPortal(LeftNavigationComponent);
  asideComponent = new ComponentPortal(AsideComponent);
  footerComponent = new ComponentPortal(FooterComponent);
  readonly COLS = 6;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.sections = this.breakpointObserver.observe(breakpointsToMatch).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            new SectionContent(this.COLS, 3, this.introductionComponent),
            new SectionContent(this.COLS, 6, this.mainComponent),
            new SectionContent(this.COLS, 1, this.footerComponent),
          ];
        }
        return [
          new SectionContent(this.COLS, 3, this.introductionComponent),
          new SectionContent(1, 5, this.leftNavigationComponent),
          new SectionContent(4, 5, this.mainComponent),
          new SectionContent(1, 5, this.asideComponent),
          new SectionContent(this.COLS, 1, this.footerComponent),
        ];
      })
    );
  }

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }
}
