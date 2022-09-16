import {
  UserComponent,
  MapComponent,
  ObjectComponent,
  CameraComponent,
} from '@game/components';
import { ObjectPosition, ObjectSize, Position } from '@game/interfaces';

export type UserComponentFactory = (
  color: string,
  position: Position
) => UserComponent;

export type MapComponentFactory = () => MapComponent;

export type ObjectComponentFactory = (
  position: ObjectPosition,
  size: ObjectSize,
  asset: string,
  cameraPosition: Position
) => ObjectComponent;

export type CameraComponentFactory = (position: Position) => CameraComponent;
