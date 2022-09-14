import { ObjectPosition } from '@game/interfaces';

export class ObjectModel {
  public get position(): ObjectPosition {
    return this._position;
  }
  constructor(private readonly _position: ObjectPosition) {}
}
