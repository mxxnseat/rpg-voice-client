import { ObjectPosition, ObjectSize, Position } from '@game/interfaces';
import { Canvas } from '@game/lib/objects';
import { ObjectModel } from './object.model';
import { ObjectView } from './object.view';

export class ObjectComponent {
  private readonly _model: ObjectModel;
  private readonly _view: ObjectView;

  constructor(
    position: ObjectPosition,
    size: ObjectSize,
    asset: string,
    private readonly _cameraPosition: Position,
    canvas: Canvas
  ) {
    this._model = new ObjectModel(position, this._cameraPosition);
    this._view = new ObjectView(asset, size, canvas.context);
  }

  /* I Dont know why pointer value doesn't work
   * may be it depent on fabric method
   * So it why I pass cameraPosition to frameAction, but it's wrong by my architecture
   * Also possible solution create observable class for this
   */
  public frameAction(cameraPosition: Position): void {
    this._model.move(cameraPosition);
    this._view.draw(this._model.position, this._model.translation);
  }
}
