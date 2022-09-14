import { UserComponent, MapComponent, ObjectComponent } from '@game/components';
import { ObjectPosition, ObjectSize, Position } from '@game/interfaces';

export type UserComponentFactory = (
  color: string,
  position: Position
) => UserComponent;

export type MapComponentFactory = (
  objectComponents: ObjectComponent[]
) => MapComponent;

export type ObjectComponentFactory = (
  position: ObjectPosition,
  size: ObjectSize,
  asset: string
) => ObjectComponent;
