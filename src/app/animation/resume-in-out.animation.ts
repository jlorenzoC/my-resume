import { animate, style, transition, trigger } from '@angular/animations';

export const inOutAnimation = trigger('resumeInOut', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('0.2s', style({ opacity: 1 })),
  ]),
]);
