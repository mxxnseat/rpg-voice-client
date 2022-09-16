import { Position } from '@game/interfaces';

export class CameraModel {
  private _position: Position;

  public get position(): Position {
    return this._position;
  }

  constructor(private readonly _userPosition: Position) {
    this.center();
  }

  public move(): void {
    this.center();
  }

  private center(): void {
    this._position = {
      x: this._userPosition.x - innerWidth / 2,
      y: this._userPosition.y - innerHeight / 2,
    };
  }
}
