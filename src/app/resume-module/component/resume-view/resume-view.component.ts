import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IntroductionComponent } from '../introduction/introduction.component';
import { MainComponent } from '../main/main.component';
import { AsideComponent } from '../aside/aside.component';
import { FooterComponent } from '../footer/footer.component';
import { LeftNavigationComponent } from '../left-navigation/left-navigation.component';
import { SectionContent } from '../../model/section-content';
import { breakpointsToMatch } from 'src/app/screen-breakpoints/breakpoints';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss'],
})
export class ResumeViewComponent implements OnDestroy {
  breakpointsToMatch = [Breakpoints.Handset, Breakpoints.Small];
  cards: Observable<SectionContent[]>;
  selectedPortal: Portal<any> | undefined;
  introductionComponent = new ComponentPortal(IntroductionComponent);
  mainComponent = new ComponentPortal(MainComponent);
  leftNavigationComponent = new ComponentPortal(LeftNavigationComponent);
  asideComponent = new ComponentPortal(AsideComponent);
  footerComponent = new ComponentPortal(FooterComponent);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cards = this.breakpointObserver.observe(breakpointsToMatch).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            new SectionContent(6, 3, this.introductionComponent),
            new SectionContent(6, 6, this.mainComponent),
            new SectionContent(6, 1, this.footerComponent),
          ];
        }
        return [
          new SectionContent(6, 3, this.introductionComponent),
          new SectionContent(1, 5, this.leftNavigationComponent),
          new SectionContent(4, 5, this.mainComponent),
          new SectionContent(1, 5, this.asideComponent),
          new SectionContent(6, 1, this.footerComponent),
        ];
      })
    );
  }

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }
}
