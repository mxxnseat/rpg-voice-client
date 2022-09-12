import { injectable } from 'inversify';

@injectable()
export class Canvas {
  private _canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;
  public get context(): CanvasRenderingContext2D {
    return this._context;
  }
  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }
  constructor() {
    this.setup();
  }
  public setup(): void {
    const canvas = document.querySelector<HTMLCanvasElement>('canvas');
    const context = canvas.getContext('2d');
    this._canvas = canvas;
    this._context = context;
    this.setDimensions();
    this.setResizeListener();
  }
  private setResizeListener(): void {
    window.addEventListener('resize', () => {
      this.setDimensions();
    });
  }
  private setDimensions(): void {
    this._canvas.width = innerWidth;
    this._canvas.height = innerHeight;
  }
}
