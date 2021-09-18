import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IntroductionComponent } from '../introduction/introduction.component';
import { MainComponent } from '../main/main.component';
import { AsideComponent } from '../aside/aside.component';
import { FooterComponent } from '../footer/footer.component';
import { LeftNavigationComponent } from '../left-navigation/left-navigation.component';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss'],
})
export class ResumeViewComponent implements OnInit, OnDestroy {
  breakpointsToMatch = [Breakpoints.Handset, Breakpoints.Small];
  cards: Observable<
    {
      cols: number;
      rows: number;
      content: Portal<any> | undefined;
    }[]
  >;
  selectedPortal: Portal<any> | undefined;
  introductionComponent = new ComponentPortal(IntroductionComponent);
  mainComponent = new ComponentPortal(MainComponent);
  leftNavigationComponent = new ComponentPortal(LeftNavigationComponent);
  asideComponent = new ComponentPortal(AsideComponent);
  footerComponent = new ComponentPortal(FooterComponent);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cards = this.breakpointObserver.observe(this.breakpointsToMatch).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            {
              cols: 6,
              rows: 3,
              content: this.introductionComponent,
            },
            { cols: 6, rows: 6, content: this.mainComponent },
            {
              cols: 6,
              rows: 1,
              content: this.footerComponent,
            },
          ];
        }
        return [
          {
            cols: 6,
            rows: 3,
            content: this.introductionComponent,
          },
          {
            cols: 1,
            rows: 5,
            content: this.leftNavigationComponent,
          },
          { cols: 4, rows: 5, content: this.mainComponent },
          { cols: 1, rows: 5, content: this.asideComponent },
          { cols: 6, rows: 1, content: this.footerComponent },
        ];
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.breakpointObserver.ngOnDestroy();
  }
}
