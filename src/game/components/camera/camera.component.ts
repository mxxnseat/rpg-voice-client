import { Position } from '@game/interfaces';
import { CameraModel } from './camera.model';

export class CameraComponent {
  private readonly _model: CameraModel;

  public get position(): Position {
    return this._model.position;
  }

  constructor(private readonly _userPosition: Position) {
    this._model = new CameraModel(this._userPosition);
  }

  public frameAction(): void {
    this._model.move();
  }
}
