import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Section } from '../../model/section-content';
import { AsideComponent } from '../aside/aside.component';
import { FooterComponent } from '../footer/footer.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { LeftNavigationComponent } from '../left-navigation/left-navigation.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnChanges {
  readonly COLS = 6;
  sections: Section[] = [];
  mobileSections: Section[] = [];
  desktopSections: Section[] = [];
  @Input() isMobileView: boolean | null = true;

  constructor() {
    const introduction = new ComponentPortal(IntroductionComponent);
    const leftNavigation = new ComponentPortal(LeftNavigationComponent);
    const main = new ComponentPortal(MainComponent);
    const aside = new ComponentPortal(AsideComponent);
    const footer = new ComponentPortal(FooterComponent);

    this.mobileSections = [
      new Section(this.COLS, 3, introduction),
      new Section(this.COLS, 7, main),
      new Section(this.COLS, 1, footer),
    ];

    this.desktopSections = [
      new Section(this.COLS, 3, introduction),
      new Section(1, 5, leftNavigation),
      new Section(4, 5, main),
      new Section(1, 5, aside),
      new Section(this.COLS, 1, footer),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setSections(changes.isMobileView.currentValue);
  }

  private setSections = (isMobileView: boolean): void => {
    this.sections = isMobileView ? this.mobileSections : this.desktopSections;
  };
}
