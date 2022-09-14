export class MapView {
  constructor(private readonly _canvasContext: CanvasRenderingContext2D) {}

  public draw(): void {
    this._canvasContext.fillStyle = '#567d46';
    this._canvasContext.fillRect(0, 0, innerWidth, innerHeight);
  }
}
