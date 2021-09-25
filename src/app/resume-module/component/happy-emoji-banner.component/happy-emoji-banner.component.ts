import happyEmojis from 'random-happy-emoji';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-happy-emoji-banner',
  templateUrl: './happy-emoji-banner.component.html',
  styleUrls: ['./happy-emoji-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HappyEmojiBannerComponent {
  happyEmoji: Observable<string>;

  constructor() {
    this.happyEmoji = timer(0, 3000).pipe(map(happyEmojis));
  }
}
