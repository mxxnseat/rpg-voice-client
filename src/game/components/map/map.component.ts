import { Canvas } from '@game/lib/objects';
import { MapView } from './map.view';

export class MapComponent {
  private readonly _view: MapView;

  constructor(canvas: Canvas) {
    this._view = new MapView(canvas.context);
  }

  public frameAction(): void {
    this._view.draw();
  }
}
