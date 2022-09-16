import { Container, interfaces } from 'inversify';
import { MapComponent } from '@game/components/map';
import { ObjectPosition, ObjectSize, Position } from '@game/interfaces';
import {
  CameraComponent,
  ObjectComponent,
  UserComponent,
} from '@game/components';
import { Canvas, EntryRpgVoiceClient } from '@game/lib/objects';
import {
  MAP_COMPONENT_FACTORY_KEY,
  OBJECT_COMPONENT_FACTORY_KEY,
  USER_COMPONENT_FACTORY_KEY,
  CAMERA_COMPONENT_FACTORY_KEY,
} from '@game/constants';
import {
  CameraComponentFactory,
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
      return () => {
        const canvas = context.container.get(Canvas);
        return new MapComponent(canvas);
      };
    }
  );
container
  .bind(OBJECT_COMPONENT_FACTORY_KEY)
  .toFactory<ObjectComponent>(
    (context: interfaces.Context): ObjectComponentFactory => {
      return (
        position: ObjectPosition,
        size: ObjectSize,
        asset: string,
        cameraPosition: Position
      ) => {
        const canvas = context.container.get(Canvas);
        return new ObjectComponent(
          position,
          size,
          asset,
          cameraPosition,
          canvas
        );
      };
    }
  );
container
  .bind(CAMERA_COMPONENT_FACTORY_KEY)
  .toFactory<CameraComponent>((): CameraComponentFactory => {
    return (userPosition: Position) => {
      return new CameraComponent(userPosition);
    };
  });
container.bind(Canvas).to(Canvas);
