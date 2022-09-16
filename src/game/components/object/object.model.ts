import { ObjectPosition, Position } from '@game/interfaces';

export class ObjectModel {
  public get position(): ObjectPosition {
    return this._position;
  }
  public get translation(): Position {
    return this._translation;
  }
  constructor(
    private readonly _position: ObjectPosition,
    private _translation: Position
  ) {}

  public move(translation: Position): void {
    this._translation = {
      x: translation.x,
      y: translation.y,
    };
  }
}
