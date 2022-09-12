import { Nullable } from '@core/interfaces/utils.interface';
import { MovingOptions, Position } from '@game/interfaces';

export class UserModel {
  private _isMove = false;
  private _movingOptions: Nullable<MovingOptions> = null;
  private readonly _speed: number = 6;
  public get position(): Position {
    return this._position;
  }
  constructor(private _position: Position) {}

  public moving(): void {
    if (this.isNeedStop()) {
      this.setDefaultMovementValues();
      return;
    }
    this._position.x += this._movingOptions.directionX;
    this._position.y += this._movingOptions.directionY;
  }
  public move(to: Position): void {
    this._isMove = true;
    const angle = Math.atan2(to.y - this._position.y, to.x - this._position.x);
    this._movingOptions = {
      directionX: this._speed * Math.cos(angle),
      directionY: this._speed * Math.sin(angle),
      startX: this._position.x,
      startY: this._position.y,
      endX: to.x,
      endY: to.y,
    };
  }
  private setDefaultMovementValues(): void {
    this._isMove = false;
    this._movingOptions = null;
  }
  private isNeedStop(): boolean {
    if (!this._isMove) {
      return true;
    }
    const xCondition =
      (this._movingOptions.startX < this._movingOptions.endX
        ? this._movingOptions.endX - this._position.x
        : this._position.x - this._movingOptions.endX) <= 0;
    const yCondition =
      (this._movingOptions.startY < this._movingOptions.endY
        ? this._movingOptions.endY - this._position.y
        : this._position.y - this._movingOptions.endY) <= 0;
    return xCondition && yCondition;
  }
}
