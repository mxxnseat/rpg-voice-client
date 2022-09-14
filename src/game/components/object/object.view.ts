import { ObjectPosition, ObjectSize } from '@game/interfaces';
import { degressToRadian } from '@game/utils';

export class ObjectView {
  constructor(
    private readonly _asset: string,
    private readonly _size: ObjectSize,
    private readonly _canvasContext: CanvasRenderingContext2D
  ) {}

  public draw({ x, y, rotate }: ObjectPosition): void {
    this._canvasContext.save();
    this._canvasContext.fillStyle = this._asset;
    this._canvasContext.rotate(degressToRadian(rotate));
    this._canvasContext.fillRect(x, y, this._size.width, this._size.height);
    this._canvasContext.restore();
  }
}
