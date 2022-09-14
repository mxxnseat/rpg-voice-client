import { ObjectPosition, ObjectSize } from '@game/interfaces';
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
    canvas: Canvas
  ) {
    this._model = new ObjectModel(position);
    this._view = new ObjectView(asset, size, canvas.context);
  }

  public frameAction(): void {
    this._view.draw(this._model.position);
  }
}
