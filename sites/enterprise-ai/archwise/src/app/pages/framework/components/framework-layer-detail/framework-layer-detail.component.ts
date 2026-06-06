import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  QueryList,
  ViewChildren
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FrameworkResolvedLayer } from '../../framework.types';

@Component({
  selector: 'aw-framework-layer-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './framework-layer-detail.component.html',
  styleUrls: ['./framework-layer-detail.component.scss']
})
export class FrameworkLayerDetailComponent {
  @Input() layers: FrameworkResolvedLayer[] = [];
  @Input() activeLayerId = '';
  @Input() expandedLayerIds: string[] = [];
  @Input() unresolvedCount = 0;

  @Output() layerToggled = new EventEmitter<string>();
  @Output() articleSelected = new EventEmitter<string>();

  @ViewChildren('layerToggleButton') private layerToggleButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  private pendingFocusLayerId: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    this.layerToggleButtons.changes.subscribe(() => {
      this.tryFocusPendingLayer();
    });
  }

  ngOnChanges(): void {
    this.pendingFocusLayerId = this.activeLayerId;
    this.tryFocusPendingLayer();
  }

  isExpanded(layerId: string): boolean {
    return this.expandedLayerIds.includes(layerId);
  }

  onLayerToggle(layerId: string): void {
    this.layerToggled.emit(layerId);
  }

  onArticleSelected(slug: string): void {
    this.articleSelected.emit(slug);
  }

  private tryFocusPendingLayer(): void {
    if (!this.pendingFocusLayerId || !isPlatformBrowser(this.platformId)) {
      return;
    }

    const layerId = this.pendingFocusLayerId;

    setTimeout(() => {
      const target = this.layerToggleButtons.find(
        (buttonRef) => buttonRef.nativeElement.dataset['layerId'] === layerId
      );

      if (target) {
        target.nativeElement.focus({ preventScroll: true });
        this.pendingFocusLayerId = null;
      }
    }, 0);
  }
}


