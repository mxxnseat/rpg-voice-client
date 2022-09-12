import { UserComponent } from '@game/components';
import { Position } from '@game/interfaces';

export type UserComponentFactory = (
  color: string,
  position: Position
) => UserComponent;
