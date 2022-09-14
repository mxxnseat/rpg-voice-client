import { Canvas } from '@game/lib/objects';
import { ObjectComponent } from '../object';
import { MapView } from './map.view';

export class MapComponent {
  private readonly _view: MapView;

  constructor(
    canvas: Canvas,
    private readonly _objectComponents: ObjectComponent[]
  ) {
    this._view = new MapView(canvas.context);
  }

  public frameAction(): void {
    this._view.draw();
    this.objectsForeach();
  }
  private objectsForeach(): void {
    this._objectComponents.forEach((object) => {
      object.frameAction();
    });
  }
}
