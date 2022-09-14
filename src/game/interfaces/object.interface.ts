export interface ObjectPosition {
  x: number;
  y: number;
  rotate: number;
}

export interface ObjectSize {
  width: number;
  height: number;
}

export interface JsonObject {
  position: ObjectPosition;
  size: ObjectSize;
  asset: string;
}
