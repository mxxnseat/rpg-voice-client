import { Container, interfaces } from 'inversify';
import { MapComponent } from '@game/components/map';
import { ObjectPosition, ObjectSize, Position } from '@game/interfaces';
import { ObjectComponent, UserComponent } from '@game/components';
import { Canvas, EntryRpgVoiceClient } from '@game/lib/objects';
import {
  MAP_COMPONENT_FACTORY_KEY,
  OBJECT_COMPONENT_FACTORY_KEY,
  USER_COMPONENT_FACTORY_KEY,
} from '@game/constants';
import {
  MapComponentFactory,
  ObjectComponentFactory,
  UserComponentFactory,
} from './interfaces';

export const container = new Container();

container.bind(EntryRpgVoiceClient).to(EntryRpgVoiceClient);
container
  .bind(USER_COMPONENT_FACTORY_KEY)
  .toFactory<UserComponent>(
    (context: interfaces.Context): UserComponentFactory => {
      return (color: string, position: Position) => {
        const canvas = context.container.get(Canvas);
        return new UserComponent(color, position, canvas);
      };
    }
  );
container
  .bind(MAP_COMPONENT_FACTORY_KEY)
  .toFactory<MapComponent>(
    (context: interfaces.Context): MapComponentFactory => {
      return (objectComponents: ObjectComponent[]) => {
        const canvas = context.container.get(Canvas);
        return new MapComponent(canvas, objectComponents);
      };
    }
  );
container
  .bind(OBJECT_COMPONENT_FACTORY_KEY)
  .toFactory<ObjectComponent>(
    (context: interfaces.Context): ObjectComponentFactory => {
      return (position: ObjectPosition, size: ObjectSize, asset: string) => {
        const canvas = context.container.get(Canvas);
        return new ObjectComponent(position, size, asset, canvas);
      };
    }
  );
container.bind(Canvas).to(Canvas);
