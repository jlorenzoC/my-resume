import { ComponentPortal } from '@angular/cdk/portal';
import { Tile } from '@angular/material/grid-list/tile-coordinator';

export class Section implements Tile {
  constructor(
    public colspan: number,
    public rowspan: number,
    public content: ComponentPortal<unknown>
  ) {}
}
