import { ObjectPosition, ObjectSize, Position } from '@game/interfaces';
import { degressToRadian } from '@game/utils';

export class ObjectView {
  constructor(
    private readonly _asset: string,
    private readonly _size: ObjectSize,
    private readonly _canvasContext: CanvasRenderingContext2D
  ) {}

  public draw(objectPosition: ObjectPosition, translation: Position): void {
    this._canvasContext.save();
    this._canvasContext.fillStyle = this._asset;
    this._canvasContext.rotate(degressToRadian(objectPosition.rotate));
    this._canvasContext.fillRect(
      objectPosition.x - translation.x,
      objectPosition.y - translation.y,
      this._size.width,
      this._size.height
    );
    this._canvasContext.restore();
  }
}
