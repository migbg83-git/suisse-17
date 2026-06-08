import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkResolvedLayer } from '../../framework.types';

@Component({
  selector: 'aw-framework-layer-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-layer-map.component.html',
  styleUrls: ['./framework-layer-map.component.scss']
})
export class FrameworkLayerMapComponent {
  @Input() layers: FrameworkResolvedLayer[] = [];
  @Input() activeLayerId = '';

  @Output() layerSelected = new EventEmitter<string>();

  onLayerSelected(layerId: string): void {
    this.layerSelected.emit(layerId);
  }

  isActive(layerId: string): boolean {
    return this.activeLayerId === layerId;
  }

  isRelated(layerId: string): boolean {
    const activeIndex = this.layers.findIndex((layer) => layer.id === this.activeLayerId);
    const currentIndex = this.layers.findIndex((layer) => layer.id === layerId);

    if (activeIndex === -1 || currentIndex === -1) {
      return false;
    }

    return Math.abs(activeIndex - currentIndex) === 1;
  }

  getDependencyLabel(index: number): string {
    const nextLayer = this.layers[index + 1];
    return nextLayer ? `Habilita: ${nextLayer.name}` : 'Habilita: coherencia operativa del sistema';
  }

  getRiskLabel(index: number): string {
    const nextLayer = this.layers[index + 1];
    return nextLayer ? `Riesgo si falta: bloqueo en ${nextLayer.name}` : 'Riesgo si falta: pérdida de continuidad';
  }
}


