import { Position } from '@game/interfaces';
import { Canvas } from '@game/lib/objects';
import { UserModel } from './user.model';
import { UserView } from './user.view';

export class UserComponent {
  private readonly _model: UserModel;
  private readonly _view: UserView;

  constructor(color: string, position: Position, canvas: Canvas) {
    this._view = new UserView(color, canvas.context);
    this._model = new UserModel(position);
  }

  public frameAction(): void {
    this._model.moving();
    this._view.draw(this._model.position);
  }
  public move(to: Position): void {
    this._model.move(to);
  }
}
