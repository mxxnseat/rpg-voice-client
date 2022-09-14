import { PLAYER_SIZES } from '@game/constants';
import { Position } from '@game/interfaces';

export class UserView {
  constructor(
    private readonly _color: string,
    private readonly _canvasContext: CanvasRenderingContext2D
  ) {}

  public draw({ x, y }: Position): void {
    this._canvasContext.fillStyle = this._color;
    this._canvasContext.fillRect(x, y, PLAYER_SIZES.width, PLAYER_SIZES.height);
  }
}
