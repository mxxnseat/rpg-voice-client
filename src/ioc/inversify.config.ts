import { Container, interfaces } from 'inversify';
import { Position } from '@game/interfaces';
import { UserComponent } from '@game/components';
import { Canvas, EntryRpgVoiceClient } from '@game/lib/objects';
import { UserComponentFactoryKey } from '@game/constants';
import { UserComponentFactory } from './interfaces';

export const container = new Container();

container.bind(EntryRpgVoiceClient).to(EntryRpgVoiceClient);
container
  .bind(UserComponentFactoryKey)
  .toFactory<UserComponent>(
    (context: interfaces.Context): UserComponentFactory => {
      return (color: string, position: Position) => {
        const canvas = context.container.get(Canvas);
        return new UserComponent(color, position, canvas);
      };
    }
  );
container.bind(Canvas).to(Canvas);
